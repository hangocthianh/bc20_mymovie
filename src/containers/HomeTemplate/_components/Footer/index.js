import React from 'react';
import {
  Box,
  Container,
  Column,
  ColumnTitle,
  List,
  ListItem,
  FooterLink
} from './_components/FooterStyle';
export default function Footer() {
  return (
    <Box>
      <Container>
        <Column>
          <ColumnTitle>
            ABC Việt Nam
          </ColumnTitle>
          <List>
            <ListItem>
              <FooterLink to="#">
                Giới Thiệu
              </FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink to="#">
                Tiện Ích Online
              </FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink to="#">
                Thẻ Quà Tặng
              </FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink to="#">
                Tuyển Dụng
              </FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink to="#">
                Liên Hệ Quảng Cáo CGV
              </FooterLink>
            </ListItem>
          </List>
        </Column>
        <Column>
          <ColumnTitle>
            Điều khoản sử dụng
          </ColumnTitle>
          <List>
            <ListItem>
              <FooterLink to="#">
                Điều Khoản Chung
              </FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink to="#">
                Điều Khoản Giao Dịch
              </FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink to="#">
                Chính Sách Thanh Toán
              </FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink to="#">
                Chính Sách Bảo Mật
              </FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink to="#">
                Câu Hỏi Thường Gặp
              </FooterLink>
            </ListItem>
          </List>
        </Column>
        <Column>
          <ColumnTitle>
            Kết nối với chúng tôi
          </ColumnTitle>
        </Column>
        <Column>
          <ColumnTitle>
            Chăm sóc khách hàng
          </ColumnTitle>
          <List>
            <ListItem>
              Hotline: 1900 6017
            </ListItem>
            <ListItem>
              Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
            </ListItem>
            <ListItem>
              Email hỗ trợ: hoidap@cgv.vn
            </ListItem>
          </List>
        </Column>
      </Container>
    </Box>
  )
}
