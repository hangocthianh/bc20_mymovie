import  React,{useEffect} from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { useSelector, useDispatch } from "react-redux";

import { actUserProfile } from "./modules/actions";
import UserInfo from "./_components/UserInfo";
import { Redirect } from "react-router-dom";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

function UserProfile() {
  //const user = useSelector((state) => state.headerReducer.data);
  //const user = JSON.parse(localStorage.getItem("UserLogin")).content;
  //console.log(localStorage.getItem("UserLogin"));
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(actUserProfile(user.taiKhoan))
  // })

  //const data = useSelector((state) => state.userProfileReducer.data);
  //console.log(data);

  return (
    (!localStorage.getItem("UserLogin")) ? (
      <Redirect to = "/" handleShowLoginModal/>

    ):(
      <div className="container my-5">
      <h2 className="text-center">Trang cá nhân</h2>
      <h5 className="text-center">{JSON.parse(localStorage.getItem("UserLogin")).content.taiKhoan}</h5>
      <img src="" />
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab>Thông tin tài khoản</Tab>
          <Tab>Các phim đã đặt</Tab>
        </TabsList>
        <TabPanel value={0}>
          <UserInfo  user={JSON.parse(localStorage.getItem("UserLogin")).content} />
        </TabPanel>
        <TabPanel value={1}>Second content</TabPanel>
      </TabsUnstyled>
    </div>
    )
  );
}
export default UserProfile;
