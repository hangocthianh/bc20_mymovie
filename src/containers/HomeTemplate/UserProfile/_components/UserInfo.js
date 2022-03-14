import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function UserInfo(props) {
  const { user } = props;
  console.log(user)
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Họ và tên"
          value={user.hoTen}
          color="primary"
          focused
        />
      </div>
      <div>
        <TextField label="Email" value={user.email} color="primary" focused />
      </div>
      <div>
        <TextField label="Số điện thoại" value={user.soDT} color="primary" focused />
      </div>
      <Stack spacing={2} direction="row">
        <Button variant="contained" size="large">
          Cập nhật
        </Button>
      </Stack>
    </Box>
  );
}
