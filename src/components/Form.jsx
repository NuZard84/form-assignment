import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Button,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import { useFormik } from "formik";
import * as yup from "yup";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme/theme";

const FormTheme = createTheme(theme);

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  address: yup
    .string()
    .required("Address is required")
    .min(25, "Specify full address"),
  country: yup.string().required("Country is required"),
  gender: yup.string().required("Gender is required"),
  hobbies: yup
    .array()
    .min(1, "Select at least one hobby")
    .required("Hobbies are required"),
});

const countries = [
  { label: "India", value: "IN" },
  { label: "United States", value: "US" },
  { label: "United Kingdom", value: "UK" },
  { label: "Canada", value: "CA" },
];

const hobbies = [
  { label: "Playing Video Games", value: "video-games" },
  { label: "Reading", value: "reading" },
  { label: "Sports", value: "sports" },
  { label: "Music", value: "music" },
];

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      country: "",
      gender: "",
      hobbies: [],
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ThemeProvider theme={FormTheme}>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col  justify-center min-h-[80%] min-w-[40%] p-12 border-2 border-[#2d4056]  rounded-3xl gap-5 text-[#0a1929]"
      >
        <TextField
          size="small"
          label="Name"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          className="w-[95%] "
        />
        <div>
          <TextareaAutosize
            id="address"
            name="address"
            rows={4}
            placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && formik.errors.address}
            className={`border-2 border-[#1f2c3b] rounded-md w-[95%] p-2 text-white bg-[#0a1929] ${
              formik.touched.address &&
              formik.errors.address &&
              "border-red-500"
            }`}
          />
          {formik.touched.address && formik.errors.address && (
            <FormHelperText error className="pl-4">
              {formik.errors.address}
            </FormHelperText>
          )}
        </div>

        <FormControl
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          className="flex gap-2"
        >
          <FormLabel className="ml-2" id="gender">
            Gender
          </FormLabel>
          <RadioGroup
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <div className="flex ml-2">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </div>
          </RadioGroup>
        </FormControl>
        <div className="w-[80%] flex items-center gap-4">
          <FormControl
            error={formik.touched.country && Boolean(formik.errors.country)}
            className="w-[50%]"
          >
            <InputLabel htmlFor="country">Country</InputLabel>
            <Select
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {countries.map((country) => (
                <MenuItem key={country.value} value={country.value}>
                  {country.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            className="w-[50%]"
            error={formik.touched.country && Boolean(formik.errors.country)}
          >
            <InputLabel id="Hobbies">Hobbies</InputLabel>
            <Select
              multiple
              id="hobbies"
              name="hobbies"
              value={formik.values.hobbies}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              renderValue={(selected) => selected.join(", ")}
            >
              {hobbies.map((items) => (
                <MenuItem key={items.value} value={items.value}>
                  <Checkbox
                    checked={formik.values.hobbies.includes(items.value)}
                  />
                  {items.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          className="w-[95%]"
        >
          Submit
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default MyForm;
