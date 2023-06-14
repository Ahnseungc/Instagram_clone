import styled from "@emotion/styled";
import { FiSettings } from "react-icons/fi";

import TabBar from "../components/TabBar";

import type { NextPage } from "next";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5%;
`;

const Img = styled.img`
  background-color: lightgray;

  height: 250px;
  border-radius: 50%;
  width: 30%;
`;

const Pcontent = styled.div`
  width: 70%;
  height: 30%;
  margin-left: 10%;
  padding-top: 2%;
`;

const Sec1 = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: start;
  margin-bottom: 5%;

  & div:not(:last-child) {
    margin-right: 3%;
  }
`;

const Sec2 = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: start;

  & div:not(:last-child) {
    margin-right: 3%;
  }
`;

const Profile: NextPage = () => {
  return (
    <>
      <Container>
        <Img />
        <Pcontent>
          <Sec1>
            <div className="name">seeennc_c</div>
            <div className="edt_btn">프로필 편집</div>
            <div className="setting_btn">
              <FiSettings />
            </div>
          </Sec1>
          <Sec2>
            <div className="gasi">게시물 0</div>
            <div className="fllower">팔로워 167</div>
            <div className="fllow">팔로우 143</div>
          </Sec2>
        </Pcontent>
      </Container>
      <hr></hr>
      <TabBar />
    </>
  );
};

export default Profile;
