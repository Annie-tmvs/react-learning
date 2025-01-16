import { Container, Paper, Stack } from "@mui/material";
import { PageHeader } from "@toolpad/core";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";

const ToolbarAction = () => {
  return (
    <Stack direction="row">
      <div>Test</div>
    </Stack>
  );
};

const MainLayout = () => {
  return (
    <DashboardLayout
      slots={{
        toolbarActions: ToolbarAction,
      }}
    >
      <Container maxWidth="lg" sx={{ padding: "32px" }}>
        <PageHeader breadcrumbs={[]} />
        <Paper
          elevation={1}
          sx={{
            minHeight: "70vh",
            margin: "32px 0",
            padding: "16px 8px",
            borderRadius: "10px",
          }}
        >
          <Outlet />
        </Paper>
      </Container>
    </DashboardLayout>
  );
};
export default MainLayout;
