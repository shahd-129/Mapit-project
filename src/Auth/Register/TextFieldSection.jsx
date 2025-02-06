import {
  Box, Button, FormGroup, FormHelperText,
  Grid, InputAdornment, InputLabel, MenuItem,
  Select, TextField, Typography
} from '@mui/material';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import { useSignupMutation } from '../../Redux/Api/Signup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { validation } from './JoiValidation';
import { useNavigate } from 'react-router-dom';

export default function TextFieldSection() {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState({
    email: "",
    companyName: "",
    phone: "",
    website: "",
    logo: "",
    password: "",
    repeat_password: "",
    ordersRange: '',
    role: '',
    managerName: "",
    phoneCode: "EG",
    deliveryMethod: ["MYSELF", "MAPIT_SHIP"],
  });
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const inputFileRef = useRef(null);

  const clickButton = () => {
    inputFileRef.current.click();

  };


// handel image Base64 
  const handelImageChange = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      setInputValue((prev) => ({
        ...prev,
        logo: base64String,
      }));
    };
    reader.onerror = (error) => {
      console.error(error);
    };
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [signup, { error }] = useSignupMutation();

  async function buttonSubmit(event) {
    event.preventDefault();
    const validationErrors = validation(inputValue);
    setErrors(validationErrors);
    if (validationErrors) return;
    try {
      const response = await signup(inputValue).unwrap();
      console.log('Signup successful', response);
      if (response.success === true) {
        navigate("/auth/login")
      }
    } catch (err) {
      console.error('Signup failed', err);
    }
  }

  // to handel checkbox method
  const handleCheckboxChange = (method) => (e) => {
    setInputValue((prev) => ({
      ...prev,
      deliveryMethod: e.target.checked
        ? [...prev.deliveryMethod, method]
        : prev.deliveryMethod.filter((m) => m !== method),
    }));
  };

  return (
    <Grid item md={7} lg={8}>
      <Box component={'form'} onSubmit={buttonSubmit}>
        {error && <Typography sx={{ color: 'red', textAlign: "center" }}>{error?.data?.message}</Typography>}
        <InputLabel id="register-select-label">{t("Register as *")}</InputLabel>
        <Select
          name="role"
          variant="standard"
          sx={{ width: "70%" }}
          size="small"
          labelId="register-select-label"
          value={inputValue?.role || ""}
          onChange={handleChange}
          error={!!errors?.role}
        >
          <MenuItem value="BASIC">{t("BASIC")}</MenuItem>
          <MenuItem value="SHIPPING_COMPANY">{t("SHIPPING_COMPANY")}</MenuItem>
        </Select>
        <FormHelperText sx={{ color: "red" }}>{errors?.role ? "Please select a value" : ""}</FormHelperText>

        {inputValue.role === "SHIPPING_COMPANY" && (
          <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
            {["MYSELF", "MAPIT_SHIP"].map((method) => (
              <FormControlLabel
                key={method}
                control={
                  <Checkbox
                    checked={inputValue.deliveryMethod.includes(method)}
                    onChange={handleCheckboxChange(method)}
                  />
                }
                label={method}
              />
            ))}
          </FormGroup>
        )}
        <FormHelperText sx={{ color: "red" }}>
          {errors?.deliveryMethod ? "Please select one or two valid delivery methods" : ""}
        </FormHelperText>


        <TextField
          name="companyName"
          label={t("Company Name *")}
          placeholder="e.g Mapit Solutions LTD"
          variant="standard"
          sx={{ mt: 10, width: "70%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BusinessIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
          value={inputValue.companyName}
          error={!!errors?.companyName}
          helperText={errors?.companyName}
        />


        <TextField
          name="managerName"
          label={t("Manager Name *")}
          variant="standard"
          sx={{ mt: 10, width: "70%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BusinessIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
          value={inputValue?.managerName}
          error={!!errors?.managerName}
          helperText={errors?.managerName}
        />

        <Box my={20} width="70%" height="100%" sx={{ borderRadius: "4px", border: "3px dashed rgb(218, 218, 218)" }} display="flex" justifyContent="center" alignItems="center">
          <Box py={20}>
            <Button onClick={clickButton} type="button" sx={{ textTransform: "none", textAlign: "center" }}>
              Click to upload
            </Button>
            <input
              ref={inputFileRef}
              type="file"
              name="logo"
              accept="image/jpeg, image/jpg, image/png"
              multiple
              hidden
              onChange={handelImageChange}
            />
            <Typography sx={{ color: "rgb(163, 163, 163)", fontSize: "12px" }}>
              JPG, JPEG, PNG less than 1MB
            </Typography>
          </Box>
        </Box>

        <InputLabel id="order-select-label" sx={{ mt: 10 }}>{t("Average Order per Month *")}</InputLabel>
        <Select
          name="ordersRange"
          variant="standard"
          sx={{ width: "70%" }}
          size="small"
          labelId="order-select-label"
          value={inputValue?.ordersRange}
          onChange={handleChange}
          fullWidth
          error={!!errors?.ordersRange}
        >
          <MenuItem value={"100 - 1000"}>100 - 1000</MenuItem>
          <MenuItem value={"1000 - 5000"}>1000 - 5000</MenuItem>
          <MenuItem value={"5000 - 10000"}>5000 - 10000</MenuItem>
          <MenuItem value={"more than 10000"}>more than 10000</MenuItem>
        </Select>
        <FormHelperText sx={{ color: "red" }}>{errors?.ordersRange ? "Please select a value" : ""}</FormHelperText>


        <TextField
          name="website"
          label={t("Website(Optional)")}
          placeholder="e.g name@domain.com"
          variant="standard"
          sx={{ mt: 10, width: "70%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachFileIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
          value={inputValue?.website}
          error={!!errors?.website}
          helperText={errors?.website}
        />

        <TextField
          name="email"
          label={t("Email")}
          placeholder="e.g name@domain.com"
          variant="standard"
          sx={{ mt: 10, width: "70%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
          value={inputValue?.email}
          error={!!errors?.email}
          helperText={errors?.email}
        />


        <Grid container spacing={2} alignItems="center" sx={{ mt: 10 }}>
          <Grid item xs={8}>
            <PhoneInput
              placeholder="Enter phone number"
              value={inputValue.phone}
              onChange={(phone) => setInputValue({ ...inputValue, phone })}
              defaultCountry={inputValue?.phoneCode}
              countries={['EG', 'SA']}
              international
            />
          </Grid>
        </Grid>


        <TextField
          sx={{ mt: 30, width: "90%" }}
          label={t('Password')}
          placeholder='******'
          name='password'
          type='password'
          variant="standard"
          fullWidth
          value={inputValue?.password}
          onChange={handleChange}
          error={!!errors?.password}
          helperText={errors?.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          sx={{ mt: 30, width: "90%" }}
          label={t('Repeat Password')}
          name='repeat_password'
          placeholder='******'
          type='password'
          variant="standard"
          fullWidth
          value={inputValue.repeat_password}
          onChange={handleChange}
          error={!!errors?.repeat_password}
          helperText={errors?.repeat_password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" sx={{ background: "#FC9E16", color: "black", width: "70%", mt: 15 }}>
          {t("Signup")}
        </Button>
      </Box>
    </Grid>
  );
}
