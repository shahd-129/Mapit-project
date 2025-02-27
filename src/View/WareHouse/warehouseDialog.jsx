import * as React from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography, Box, Divider, useMediaQuery, useTheme, } from "@mui/material";
import { useAddWarehouseDataMutation, useDeleteWareHouseDataMutation, useUpdateWareHouseDataMutation } from "../../redux/api/warehouse";
import { validation } from "./joiValidationSectionToUpdateWarehouse";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { cloneDeep, pick, set } from "lodash";
export default function WarehouseDialog({ open, selectedWareHouse, isEditing, onClose }) {

  const { t } = useTranslation()
  const [inputValue, setInputValue] = React.useState({
    name: "", phone: "", address: {
      city: "",
      area: "",
      street: '',
      buildingNumber: "",
      state: "",
      details: "",
      location: {
        coordinates: [0, 0]
      }
    }
  })


  React.useEffect(() => {
    if (open && isEditing && selectedWareHouse) {
      // to distruct the  data i need only 
      const warehouseData = {
        ...pick(selectedWareHouse, ['name', 'phone']),
        address: { ...pick(selectedWareHouse.address, ['city', 'area', 'street', 'buildingNumber', 'state', 'details']) }
      }
      
      setInputValue(warehouseData);
    }else {
      setInputValue({
        name: "",
        phone: "",
        address: {
          city: "",
          area: "",
          street: "",
          buildingNumber: "",
          state: "",
          details: "",
          location: { coordinates: [0, 0] }
        }
      });
    }
  }, [open, isEditing, selectedWareHouse]);


  /// to handel change inputs 
  const handelChange = (event) => {
    const { name, value } = event.target
    setInputValue((prev) => {
      let warehoueClone = cloneDeep(prev);

      set(warehoueClone, name, value);
      return warehoueClone;

  })
  }

  ////// to delete warehouse dialog
  const [deleteWareHouseData] = useDeleteWareHouseDataMutation()
  const handelDeleteDocs = async () => {
    try {
      const res = await deleteWareHouseData(selectedWareHouse.id).unwrap()
     successMessageToaster("Warehouse Deleted successfully!");
    
      console.log(res);
    } catch (err) {
      console.log(err);

    }
  }

  /// to update warehouse dialog
  const [updateWareHouseData] = useUpdateWareHouseDataMutation()
  const handleUpdateDocs = async () => {

    const { name, phone, address } = inputValue;
    const { city, area, street, buildingNumber, state, details, location } = address;


    const validationErrors = validation(inputValue);
    setErrors(validationErrors);
    console.log(validationErrors);

    if (validationErrors) return;

    const dataToUpdate = {
      name,
      phone,
      address: {
        city,
        area,
        street,
        buildingNumber,
        state,
        details,
        location: {
          coordinates: [0, 0]
        },
      }
    };

    try {
      const res = await updateWareHouseData({
        warehouseId: selectedWareHouse.id,
        ...dataToUpdate
      }).unwrap();
      console.log(res);
     
        successMessageToaster("Warehouse Updated successfully!");
  
    } catch (err) {
      console.log(err);
    }
   

  };




  // to create warehouse 
  const [addWarehouseData, { error }] = useAddWarehouseDataMutation()
  const [errors, setErrors] = React.useState()
  const handelClickButton = async (e) => {
    e.preventDefault()
    const validationErrors = validation(inputValue);
    setErrors(validationErrors);
    if (validationErrors) return;
    try {
      const res = await addWarehouseData(inputValue).unwrap()
          successMessageToaster("Warehouse added successfully!");

    } catch (err) {
      console.log(err);

    }


  }


  function successMessageToaster(message) {
    toast.success(message);
    closeHandler()
  }


  function closeHandler() {
    setInputValue({
      name: "", phone: "", address: {
        city: "",
        area: "",
        street: '',
        buildingNumber: "",
        state: "",
        details: "",
        location: {
          coordinates: [0, 0]
        }
      }
    })
    onClose()
  }


  // to handel close dailog

  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog open={open} onClose={closeHandler} fullScreen={smallScreen}>
      <DialogTitle>{isEditing === 'update' ? t('Update Warehouse') : t('Add Warehouse')}</DialogTitle>
      <Divider />
      <DialogContent>
        {error && <Typography sx={{ color: 'red', textAlign: "center" }}>{error?.data?.message}</Typography>}

        <Grid container spacing={15}>
          <Grid item md={6} xs={12} sm={12}>
            <TextField
              required
              margin="dense"
              name="name"
              label={t("Name")}
              value={inputValue.name}
              error={!!errors?.name}
              helperText={errors?.name}
              fullWidth
              variant="outlined"
              size="small"
              onChange={handelChange}

            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <Box sx={{
              "& .PhoneInputInput": {
                width: "100%",
                padding: "10px",
                m: '10px',
                borderRadius: "4px",
                border: "1px solid #ccc",

              }
            }}>
              <PhoneInput
                placeholder="Enter phone number"
                value={inputValue.phone}
                onChange={(phone) => setInputValue({ ...inputValue, phone })}
                defaultCountry="EG"
                countries={["EG", "SA"]}
                international
              />
            </Box>
          </Grid>


          <Grid item md={6} xs={12} sm={12}>
            <TextField
              required
              margin="dense"
              name="address.state"
              label={t("State/Region")}
              fullWidth
              variant="outlined"
              value={inputValue?.address?.state}
              error={!!errors?.state}
              helperText={errors?.state}
              onChange={handelChange}
              size="small"
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <TextField
              required
              margin="dense"
              name="address.city"
              label={t("City")}
              value={inputValue?.address?.city}
              error={!!errors?.city}
              helperText={errors?.city}
              fullWidth
              variant="outlined"
              size="small"
              onChange={handelChange}
            />
          </Grid>


          <Grid item md={6} xs={12} sm={12}>
            <TextField
              required
              margin="dense"
              name="address.street"
              label={t("Street")}
              value={inputValue?.address?.street}
              fullWidth
              variant="outlined"
              error={!!errors?.street}
              helperText={errors?.street}
              size="small"
              onChange={handelChange}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <TextField
              required
              margin="dense"
              name="address.buildingNumber"
              label={t("Building Number")}
              fullWidth
              variant="outlined"
              value={inputValue?.address?.buildingNumber}
              error={!!errors?.buildingNumber}
              helperText={errors?.buildingNumber}
              size="small"
              onChange={handelChange}
            />
          </Grid>


          <Grid item md={6} xs={12} sm={12}>
            <TextField
              required
              margin="dense"
              name="address.details"
              value={inputValue?.address?.details}
              error={!!errors?.details}
              helperText={errors?.details}
              label={t("Address Details")}
              fullWidth
              variant="outlined"
              size="small"
              onChange={handelChange}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <TextField
              required
              margin="dense"
              name="address.area"
              label={t("District")}
              fullWidth
              value={inputValue?.address?.area}
              error={!!errors?.area}
              helperText={errors?.area}
              variant="outlined"
              onChange={handelChange}
              size="small"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" onClick={closeHandler}>
          {t('Close')}
        </Button>

        {isEditing === 'update' ? 
          <>
            <Box>
              <Button variant="contained" sx={{ m: 10 }} color="primary" onClick={handleUpdateDocs}>
                {t("Update")}
              </Button>
              <Button variant="contained" color="error" onClick={handelDeleteDocs}>
                {t("Delete")}
              </Button>
            </Box>
          </>
         : 
          <Button variant="contained" color="success" onClick={handelClickButton}>
            {t('Add')}
          </Button>
        }
      </DialogActions>

    </Dialog>
  );
}
