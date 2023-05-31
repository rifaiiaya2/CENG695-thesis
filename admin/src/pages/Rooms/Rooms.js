import React, { useEffect, useState } from "react";
import "../Items/Items.css";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";
import Buttons from "../../components/Buttons/Buttons";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

//// for a text filed ///
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//// for a text filed ///

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#344f7c",
    color: "#ededed",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    color: "var(--textcolor1)",
    textAlign: "center",
    transition: ".5s",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "var(--background2)",
  transition: ".5s",
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Rooms() {
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  ////  function to add a Rooms ///
  const HandeladdItem = async (e) => {
    e.preventDefault();
    const image_array = Object.values(images.images);
    const formData = new FormData();
    image_array.forEach((file) => {
      formData.append("image", file);
    });
    formData.append("title", title);
    formData.append("price", price);
    await axios
      .post("http://localhost:8000/api/rooms", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setTitle("");
        setPrice("");
        setImages("");
        setOpen(false);
        Swal.fire({
          title: " adedd Successfully",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
        getAllRooms();
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////  function to add a Rooms ///

  ////  Function to delet a Rooms ///
  const HandelDeletItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/rooms/${id}`)
          .then((res) => {
            setLoading(true);
            Swal.fire({
              title: " Deleted Is Successfully",
              icon: "success",
              timer: 2000,
              timerProgressBar: true,
              toast: true,
              position: "top-end",
              showConfirmButton: false,
            });
            getAllRooms();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  ////  Function to delet a Rooms ///

  ////  function to Edit a Rooms ///
  const HandelEditItem = (id) => {
    navigate(`/dashboard/editroom/${id}`);
  };
  ////  function to Edit a Rooms ///

  //// to get all Rooms ///
  const getAllRooms = async () => {
    await axios
      .get("http://localhost:8000/api/rooms")
      .then((res) => {
        if (res.status === 200) {
          setRoom(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getAllRooms();
  }, []);
  //// to get all books ///

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="post">
      <div className="d-flex justify-content-around">
        <Search
          placeholder="Search for Rooms"
          // data={DATA && DATA}
          //   searched={setItemss}
          //   page={"items"}
        />

        <Buttons
          buttonStyle="btn--success--solid"
          buttonSize="btn-lg"
          text={"Add Room"}
          variant="outlined"
          onClick={handleClickOpen}
        />

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <form onSubmit={HandeladdItem}>
            <DialogTitle>{"Add A New Post"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Box
                  sx={{
                    "& > :not(style)": { m: 1.5, width: "58ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    type="file"
                    required
                    inputProps={{
                      multiple: true,
                    }}
                    onChange={(e) => setImages({ images: e.target.files })}
                  />

                  <TextField
                    id="standard-basic"
                    label="Add Your Title "
                    type="string"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <TextField
                    id="standard-basic"
                    label="Add Your price "
                    type="string"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Box>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Buttons
                buttonStyle="btn--danger--solid"
                buttonSize="btn-lg"
                text={"Cancel "}
                onClick={handleClose}
              />

              <Buttons
                buttonStyle="btn--success--solid"
                buttonSize="btn-lg"
                text={"New Item"}
                type="submit"
              />
            </DialogActions>
          </form>
        </Dialog>
      </div>

      <div
        className="post_table"
        style={{ display: "flex", position: "relative", minHeight: "70vh" }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 400 }} aria-label="contained table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">
                  <LocalOfferIcon style={{ width: "22px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    image
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  <CalendarMonthIcon style={{ width: "22px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    title
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  <CalendarMonthIcon style={{ width: "22px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    price
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  <RingVolumeIcon />
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Action
                  </span>
                </StyledTableCell>
              </TableRow>
            </TableHead>

            {loading ? (
              <Loading />
            ) : (
              <TableBody>
                {room &&
                  room.map((roomm, index) => {
                    return (
                      <StyledTableRow key={index} className="main_row">
                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          <img
                            src={roomm.image}
                            style={{ width: "35px", "border-radius": "70%" }}
                          />
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {roomm.title}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {roomm.price}
                        </StyledTableCell>

                        <StyledTableCell align="left" style={{ padding: 0 }}>
                          <div className="button_table">
                            <Buttons
                              buttonStyle="btn--success--solid"
                              buttonSize="btn-md"
                              icon={<EditIcon />}
                              onClick={() => HandelEditItem(roomm._id)}
                            />

                            <Buttons
                              buttonStyle="btn--danger--solid"
                              buttonSize="btn-md"
                              icon={<DeleteOutlineIcon />}
                              onClick={() => HandelDeletItem(roomm._id)}
                            />
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default Rooms;
