import React, { useEffect, useState } from "react";
import '../Items/Items.css'
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";
import Buttons from "../../components/Buttons/Buttons";
import { styled } from "@mui/material/styles";
import { Table, TableBody, TableContainer, TableHead, TableRow, } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";



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

function Contact() {
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(false);

  //// to get all Rooms ///
  const getAllRooms = async () => {
    await axios
      .get("http://localhost:8000/api/contact")
      .then((res) => {
        if (res.status === 200) {
          setContact(res.data);
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
          .delete(`http://localhost:8000/api/contact/${id}`)
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
  return (
    <div className="post">

      <div className="d-flex justify-content-around">

         <Search
          placeholder="Search for Items"
          // data={DATA && DATA}
        //   searched={setItemss}
        //   page={"items"}
        />

        <Buttons
          buttonStyle="btn--success--solid"
          buttonSize="btn-lg"
          text={"All Messages"}
          variant="outlined"
          onClick={''}
        />


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
                  <CalendarMonthIcon style={{ width: "22px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                  Full Name
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  <CalendarMonthIcon style={{ width: "22px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                  Email
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  <CalendarMonthIcon style={{ width: "22px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                  Descirption
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
                {contact &&
                  contact.map((cont, index) => {
                    return (
                      <StyledTableRow key={index} className="main_row">

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {cont.fullname}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {cont.email} 
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {cont.descirption}
                        </StyledTableCell>

                        <StyledTableCell align="left" style={{ padding: 0 }}>
                          <div className="button_table">
                            {/* <Buttons
                              buttonStyle="btn--success--solid"
                              buttonSize="btn-md"
                              icon={<EditIcon />}
                            onClick={() => HandelEditItem(item._id)}
                            /> */}

                            <Buttons
                              buttonStyle="btn--danger--solid"
                              buttonSize="btn-md"
                              icon={<DeleteOutlineIcon />}
                            onClick={() => HandelDeletItem(cont._id)}
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
export default Contact;
