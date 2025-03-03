import {  Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
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
      field: "permissions",
      headerName: t("Permissions"),
      width: 200,
      sortable: false,
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
  const [warehouseId, setWarehouseId] = useState()
  const [permissions, setPermissions] = useState()
  const { data, isLoading } = useGetUsersQuery({ searchKey: search, role, type: typeRole, warehouses: warehouseId, permissions })

  const { data: warehuseData } = useGetWarehouseDataQuery()
  console.log(warehuseData);
  const warehouse = warehuseData?.docs
  function handelSearchInput(e) {
    setSearch(e.target.value)
  }

 
  return (
    <Container sx={{ mx: 20, my: 15 }}>

      <Box mb={10} display={'flex'} flexDirection={'row'}>

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
          <InputLabel id="warehouse-label">Warehouse</InputLabel>
          <Select

            label="Warehouse"
            size="small"
            labelId="warehouse-label"
            id="warehouse"
            onChange={(e) => setWarehouseId(e.target.value)}
            sx={{ ml: 10 }}
            value={warehouseId}
          >
            {warehouse?.map((warehouse) => (
              <MenuItem key={warehouse?.id} value={warehouse?.id}>{warehouse?.name}</MenuItem>
            ))}
          </Select>

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

        <TextField value={search} onChange={handelSearchInput} sx={{ ml: 20, width: "50" }} size='small' label='search' />
        <Button sx={{ ml: 20 }} variant='contained'>Search</Button>
      </Box>
      <Box sx={{ height: 480 }}>
        <Box sx={{ width: { md: "80%", xs: "100%" }, height: "100%" }}>
          <DataGrid
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
