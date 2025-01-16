import { Box, Button, Container, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DatePickerCutom from "../../components/common/DatePicker/DatePicker";
import BasicSelect from "../../components/common/Select/Select";
import TableCustom from "../../components/common/Table/Table";
import { Form } from "react-router-dom";
import { useState } from "react";

const OPTION1 = [
  { id: "1", name: "ตรัง" },
  { id: "2", name: "ตาก" },
];
const OPTION2 = [
  { id: "1", name: "ทั้งหมด" },
  { id: "2", name: "สำเร็จ" },
];

const HEADER = ["id", "name", "detail"];
const DATA = [
  { name: "test", detail: "test-test", id: "1" },
  { name: "test", detail: "test-test", id: "2" },
  { name: "test", detail: "test-test", id: "3" },
  { name: "test", detail: "test-test", id: "4" },
];

const OverView = () => {
  const [formData, setFormData] = useState("");
  const [amphur, setAmphur] = useState("");

  const handleChange = (e: any) => {
    console.warn(e.target);
    setFormData(e.target.value);
  };

  const onSubmit = () => {
    setAmphur(formData);
  };

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
              <BasicSelect label="สถานะ" defaultValue="1" option={OPTION2} />
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
          headerbackgroud="blue"
          headerheight="50px"
          headercolor="yellow"
          theader={HEADER}
          tbody={DATA}
        />
      </Box>
    </Container>
  );
};

export default OverView;
