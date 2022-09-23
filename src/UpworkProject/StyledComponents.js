import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

import { styled } from "@mui/material/styles";

const PRIMARY_GREEN = "#39B54A";
const SECONDARY_NAVY = "#2B5468";

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN, 
  marginTop: "25px",
  borderRadius: "20px",
  textTransform: 'none'
}));
export const PrimaryButtonOutlined = styled(Button)(() => ({
  marginTop: "25px",
  borderRadius: "20px",
  textTransform: 'none'
}));

export const LoginTextField = styled(TextField)(() => ({
  border: `1px solid ${PRIMARY_GREEN}`,
  borderRadius: "10px"
}));


