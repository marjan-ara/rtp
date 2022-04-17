import {
    Alert,
  Button,
  FormControl,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import image1 from "./../../assets/img/1.jpg";
import image2 from "./../../assets/img/2.jpg";
import image3 from "./../../assets/img/3.jpg";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Picture = () => {
  const [file, setFile] = useState(undefined);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    let fileUploaded = event.target.files[0];
    let fileType = fileUploaded.name
      .substr(fileUploaded.name.lastIndexOf(".") + 1)
      .toLowerCase();
    if (fileType != "jpg" && fileType != "jpeg" && fileType != "png") {
      setOpen(true);
    } else setFile(URL.createObjectURL(fileUploaded));
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {
          setOpen(false);
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div style={{justifyContent:"center"}}>
      <ImageList sx={{ width: "100%", height: 350 }} cols={3} rowHeight={164}>
        <ImageListItem>
          <img
            src={image1}
            srcSet={image1}
            alt="image1"
            style={{ height: "100%" }}
          />
          <ImageListItemBar
            title="image1"
            subtitle={<span>by: Marjan </span>}
            position="below"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={image2}
            srcSet={image2}
            alt="image2"
            style={{ height: "100%" }}
          />
          <ImageListItemBar
            title="image2"
            subtitle={<span>by: Marjan </span>}
            position="below"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={image3}
            srcSet={image3}
            alt="image3"
            style={{ height: "100%" }}
          />
          <ImageListItemBar
            title="image3"
            subtitle={<span>by: Siavash </span>}
            position="below"
          />
        </ImageListItem>
        {file && (
          <ImageListItem>
            <img
              src={file}
              srcSet={file}
              alt="file"
              style={{ height: "100%" }}
            />
            <ImageListItemBar
              title="file"
              subtitle={<span>by: Marjan </span>}
              position="below"
            />
          </ImageListItem>
        )}
      </ImageList>
      <hr />
      {/* {file && <img src={file} />} */}
      <FormControl className="upload-img-form">
        <Input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={handleChange}
        />

        <label htmlFor="raised-button-file">
          <Button
            variant="outlined"
            sx={{
              width: "200px",
              borderColor: "#9c27b0",
              color: "#9c27b0",
            }}
            component="span"
          >
            Upload Image
          </Button>
        </label>
      </FormControl>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
        }}
        // message="FILE FORMAT IS NOT SUPPORTED"
        // action={action}
        //bodyStyle={{ backgroundColor: "red" }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          FILE FORMAT IS NOT SUPPORTED
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Picture;
