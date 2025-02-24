import React, { useState } from "react";
import { useGetWarehouseDataQuery } from "../../Redux/Api/warehouse";
import { Box, Button, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { useTranslation } from "react-i18next";
import AddWareHouse from "./AddWareHouse";

export default function WarehouseSection() {

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [selectedWareHouse, setSelectedWareHouse] = useState(null)
  const { t } = useTranslation()
  const columns = [
    { field: "name", headerName: t("Name"), width: 150 },
    {
      field: "address",
      headerName: t("City"),
      width: 150,
      editable: true,
      valueGetter: (value) => value?.city,
    },
    {
      field: "phone",
      headerName: t("Phone"),
      type: "number",
      width: 170,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: t("Date"),
      width: 170,
      editable: false,
      valueGetter: (value, row) =>
        row?.createdAt ? moment(row?.createdAt).format("DD/MM/YYYY") : "",
    },
    {
      field: "details",
      headerName: t("Address Details"),
      width: 200,
      sortable: false,
      valueGetter: (value, row) => row?.address?.details,
    },
  ];


  const { data } = useGetWarehouseDataQuery({ page: page + 1, limit: pageSize });
  const [open, setOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(null)

  const handelOpenRow = (params) => {
    setSelectedWareHouse(params.row)
    setOpen(true)
    setIsEditing('update')
  }

  return (
    <>


    <AddWareHouse 
      open={open} 
      setOpen={setOpen} 
      setIsEditing={setIsEditing} 
      selectedWareHouse={selectedWareHouse} 
      setSelectedWareHouse={setSelectedWareHouse} 
      isEditing={isEditing} 
    />

    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box
        sx={{
          height: 480,
          width: { md: "60%", xs: "100%", sm: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Box 
          sx={{ 
            width: "100%", 
            display: "flex", 
            justifyContent: "flex-start", 
            mb: 10
          }}
        >
          <Button onClick={() => setOpen(true)} variant="contained">
            {t("Add")}
          </Button>
        </Box>

     
        <Box sx={{ width: { md: "100%", xs: "100%" }, maxWidth: "100%", height: "100%" }}>
          <DataGrid
            rows={data?.body?.docs ?? []}
            columns={columns}
            pageSizeOptions={[5]}
            paginationMode="server"
            autoPageSize={true}
            disableRowSelectionOnClick
            rowCount={data?.body?.totalDocs ?? 0}
            paginationModel={{ page, pageSize }}
            onPaginationModelChange={(params) => {
              setPage(params.page);
              setPageSize(params.pageSize);
            }}
            getRowId={(row) => row.id}
            onRowClick={handelOpenRow}
          />
        </Box>
      </Box>
    </Grid>
  </>
);
}
