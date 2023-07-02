const theme = {
  palette: {
    mode: "dark",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#ffffff",
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: "#ffffff",
        },
      },
    },
  },
};

export default theme;
