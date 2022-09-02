import React from 'react'
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from "@material-ui/core";

const dark = createTheme({
  palette: {
    type: "dark",
  },
})

const PageChange = ({setPage, numOfPages = 10}) => {

    const handleChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
      };

  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#5d5371cf"
    }}>
      <ThemeProvider theme={dark}>
        
      <Pagination count={numOfPages} onChange={(e) => handleChange(e.target.textContent)} hideNextButton
      hidePrevButton
      color='secondary' />
      </ThemeProvider>
    </div>
  )
}

export default PageChange
