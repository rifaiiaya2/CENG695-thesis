import React, { useEffect, useState } from "react";
import '../Items/Items.css'
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";
import Buttons from "../../components/Buttons/Buttons";
import { styled } from "@mui/material/styles";
import { Table, TableBody, TableContainer, TableHead, TableRow, } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


//// for a text filed ///


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

function Books() {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);

      //// to get all books ///
  const getAllBooks = async () => {
    await axios
      .get("http://localhost:8000/api/book")
      .then((res) => {
        if (res.status === 200) {
          setBook(res.data);
          // setDATA(res.data.response);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getAllBooks();
  }, []);
  //// to get all books ///

  return (
    <div className="post">

      <div className="d-flex justify-content-around">

         <Search
          placeholder="Search for A Book"
          // data={DATA && DATA}
        //   searched={setItemss}
        //   page={"items"}
        />

        <Buttons
          buttonStyle="btn--success--solid"
          buttonSize="btn-lg"
          text={"ALL BOOK"}
          variant="outlined"

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
                  {/* <LocalOfferIcon style={{ width: "20px" }} /> &nbsp; */}
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom"  ,width: "10px"  }}>
                    Date-In
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  {/* <CalendarMonthIcon style={{ width: "20px" }} /> &nbsp; */}
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" ,width: "10px" }}>
                  Date-Out
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  {/* <CalendarMonthIcon style={{ width: "20px" }} /> &nbsp; */}
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom",width: "10px"  }}>
                    Type of Rom
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  {/* <CalendarMonthIcon style={{ width: "20px" }} /> &nbsp; */}
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" ,  width: "20px" }}>
                    Chlidren
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  {/* <CalendarMonthIcon style={{ width: "20px" }} /> &nbsp; */}
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" ,width: "10px" }}>
                    Full Name
                  </span>
                </StyledTableCell>  <StyledTableCell align="left">
                  {/* <CalendarMonthIcon style={{ width: "20px" }} /> &nbsp; */}
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" ,width: "10px" }}>
                    Email
                  </span>
                </StyledTableCell>  <StyledTableCell align="left">
                  {/* <CalendarMonthIcon style={{ width: "20px" }} /> &nbsp; */}
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" ,width: "10px" }}>
                    Number
                  </span>
                </StyledTableCell>

                {/* <StyledTableCell align="left">
                  <RingVolumeIcon />
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Action
                  </span>
                </StyledTableCell> */}
              </TableRow>
            </TableHead>

            {loading ? (
              <Loading />
            ) : (
              <TableBody>
                {book &&
                  book.map((books, index) => {
                    return (
                      <StyledTableRow key={index} className="main_row">

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {books.dateIn.substring(0 , 10)}
                        </StyledTableCell>


                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {books.dateOut.substring(0 , 10)}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {books.typeofchl}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {books.children}
                        </StyledTableCell>


                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {books.fullname}
                        </StyledTableCell>


                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {books.email}
                        </StyledTableCell>


                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {books.phonenumber}
                        </StyledTableCell>

                        {/* <StyledTableCell align="left" style={{ padding: 0 }}>
                          <div className="button_table">
                            <Buttons
                              buttonStyle="btn--success--solid"
                              buttonSize="btn-md"
                              icon={<EditIcon />}
                            onClick={() => HandelEditItem(item._id)}
                            />

                            <Buttons
                              buttonStyle="btn--danger--solid"
                              buttonSize="btn-md"
                              icon={<DeleteOutlineIcon />}
                            onClick={() => HandelDeletItem(item._id)}
                            />
                          </div>
                        </StyledTableCell> */}

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
export default Books;
