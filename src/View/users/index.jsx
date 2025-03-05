import {
  Autocomplete, Box, Chip,
  Container, FormControl, InputLabel,
  MenuItem, Select, TextField
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useGetUsersQuery } from '../../redux/api/users';
import { useGetWarehouseDataQuery } from '../../redux/api/warehouse';

export default function Users() {

  const { t } = useTranslation()
  const columns = [
    { field: "name", headerName: t("Name"), width: 150 },
    {
      field: "email",
      headerName: t("Email"),
      width: 150,
      editable: true,
    },
    {
      field: "role",
      headerName: t("User role"),
      width: 130,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: t("Date"),
      width: 130,
      editable: false,
      valueGetter: (value, row) =>
        row?.createdAt ? moment(row?.createdAt).format("DD/MM/YYYY") : "",
    },
    {
      field: "permissions",
      headerName: t("Permissions"),
      width: 200,
      sortable: false,
      renderCell: (params) => {
        const permissionList = Array.isArray(params.value) ? params.value : [];
        return (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3.5 }}>
            {permissionList.map((perm) => (
              <Chip  label={perm} sx={{ backgroundColor: "lightblue", color: "black", mt: 10 }} />
            ))}
          </Box>
        );
      },
    },
    {
      field: "type",
      headerName: t("User role type"),
      width: 200,
      sortable: false,
    },
  ];

  const [search, setSearch] = useState()
  const [role, setRole] = useState()
  const [typeRole, setTypeRole] = useState()
  const [warehouseId, setWarehouseId] = useState([])
  const [permissions, setPermissions] = useState()
  const { data, isLoading } = useGetUsersQuery({ searchKey: search, role, type: typeRole, warehouses: warehouseId.length > 0 ? warehouseId : undefined, permissions })

  const { data: warehuseData } = useGetWarehouseDataQuery()
  const warehouse = warehuseData?.docs



  return (
    <Container sx={{ mx: 20, my: 15 }}>

      <Box mb={10} display={'flex'} flexDirection={'row'}>

        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="user-role-label">User role</InputLabel>
          <Select
            label="User role"
            size="small"
            labelId="user-role-label"
            id="user-role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
            sx={{ ml: 10 }}
          >
            <MenuItem value={'MERCHANT'}>{t("Dispatcher")}</MenuItem>
            <MenuItem value={'WAREHOUSE'}>{t("Warehouse admin")}</MenuItem>

          </Select>

        </FormControl >

        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="user-role-type-label">User role type</InputLabel>
          <Select
            label="User role type"
            size="small"
            labelId="user-role-type-label"
            id="user-role-type"
            onChange={(e) => setTypeRole(e.target.value)}
            value={typeRole}
            sx={{ ml: 10 }}
          >
            <MenuItem value={'ADMIN'}>{t("Main")}</MenuItem>
            <MenuItem value={'SUB_ADMIN'}>{t("Sub")}</MenuItem>
            {role === 'WAREHOUSE' && <MenuItem value={'SUPERVISOR'}>{t("Supervisor")}</MenuItem>}
          </Select>
        </FormControl>


        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <Autocomplete
            multiple
            options={warehouse || []}
            getOptionLabel={(option) => option.name || ""}
            value={(warehouse || []).filter((w) => (warehouseId || []).includes(w.id))}
            onChange={(event, newValue) => {
              setWarehouseId(newValue.map((w) => w.id));
            }}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={option.id}
                  label={option.name}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} label="Warehouse" variant="outlined" size="small" />
            )}
            sx={{
              width: 250,
              maxHeight: 100,
              overflow: "auto",
            }}
          />



        </FormControl>
        
        {typeRole === 'SUPERVISOR' ?
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">

            <InputLabel id="Permissions">Permissions</InputLabel>
            <Select
              label="Permissions"
              size="small"
              labelId="Permissions"
              id="Permissions"
              onChange={(e) => setPermissions(e.target.value)}
              value={permissions}
              sx={{ ml: 10 }}
            >
              <MenuItem value={'DROP_OFF'}>{t("Inbound")}</MenuItem>
              <MenuItem value={'PICK_UP'}>{t("Outbound")}</MenuItem>
              <MenuItem value={'PICK_UP,DROP_OFF'}>{t("Both")}</MenuItem>
            </Select>
          </FormControl>

          : ""}

        <TextField value={search} onChange={(e) => setSearch(e.target.value)} sx={{ ml: 20, width: "50" }} size='small' label='search' />
      </Box>
      <Box sx={{ height: 480 }}>
        <Box sx={{ width: { md: "80%", xs: "100%" }, height: "100%" }}>
          <DataGrid
            sx={{ textTransform: "lowercase" }}
            rows={data?.docs ?? []}
            columns={columns}
            pageSizeOptions={[5]}
            paginationMode="server"
            disableRowSelectionOnClick
            loading={isLoading}
            rowCount={data?.totalDocs ?? 0}
          />
        </Box>
      </Box>

    </Container>
  )
}
