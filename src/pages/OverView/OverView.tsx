import { Box, Button, Container, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DatePickerCutom from "../../components/common/DatePicker/DatePicker";
import BasicSelect from "../../components/common/Select/Select";
import TableCustom from "../../components/common/Table/Table";
import { Form } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DescriptionIcon from "@mui/icons-material/Description";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
const OPTION1 = [
  { id: "1", name: "ตรัง" },
  { id: "2", name: "ตาก" },
];
const OPTION2 = [
  { id: "1", name: "ทั้งหมด" },
  { id: "2", name: "สำเร็จ" },
];

const HEADER = [
  "id",
  "city",
  "point1",
  "status1",
  "status2",
  "status3",
  "point4",
  "status4",
];

const OverView = () => {
  const [formData, setFormData] = useState("");
  const [amphur, setAmphur] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e: any) => {
    setFormData(e.target.value);
  };

  const onSubmit = () => {
    setAmphur(formData);
  };

  const OpenDetail = (res: any) => {
    // alert("test" + res);
    console.log(res)
  };
  //
  const endpoint = "https://6789fd66dd587da7ac2853ce.mockapi.io/api/overview";
  const fetchData = async () => {
    try {
      const res = await axios.get(endpoint);
      setData(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setFormData(OPTION1[0].name);
    fetchData();
  }, []);

  return (
    <Container>
      <Box>
        <h3>การค้นหา</h3>
        <Form onSubmit={onSubmit}>
          <Grid container spacing={3} columnSpacing={3}>
            <Grid size={4}>
              <DatePickerCutom label="วันที่" defaultValue={"2022-04-17"} />
            </Grid>
            <Grid size={4}>
              <BasicSelect
                label="ข้อมูลอำเภอ"
                option={OPTION1}
                value={formData}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={4}>
              <BasicSelect
                label="สถานะ"
                option={OPTION2}
                defaultValue={OPTION2[0].name}
              />
            </Grid>
            <Grid container size={12} spacing={3} justifyContent={"flex-end"}>
              <Grid size={2}>
                <Button
                  size="large"
                  onClick={() => {
                    setFormData("");
                    setAmphur("");
                  }}
                >
                  คืนค่าเริ่มต้น
                </Button>
              </Grid>
              <Grid size={2}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth={true}
                  color="primary"
                  size="large"
                  sx={{ color: "orange" }}
                >
                  ค้นหา
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Box>
      <Divider variant="middle" sx={{ margin: "32px 0" }} />
      <Box>
        <span>
          ข้อมูลสถานะระดับอำเภอส่งถึง <strong>{amphur}</strong>
        </span>
        <TableCustom
        callback={(res) => {console.log(res)

          debugger
        }}
          headerbackgroud="#1f5cc6"
          headerheight="50px"
          headercolor="white"
          theader={HEADER}
          tbody={data}
          textalign="center"
          actioncell="true"
          childern={
            <div>
              <Button onClick={OpenDetail}>
                <DescriptionIcon fontSize="small" color="primary" />
              </Button>
              <Button onClick={OpenDetail}>
                <CreateIcon fontSize="small" color="warning" />
              </Button>
              <Button onClick={OpenDetail}>
                <DeleteIcon fontSize="small" color="error" />
              </Button>
            </div>
          }
        />
      </Box>
    </Container>
  );
};

export default OverView;
