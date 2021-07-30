import React, { useMemo, useState } from "react";
import Ripple from "react-waves-effect/lib";
import RoundedButtonSM from "../../components/input/RoundedButton_sm";
import SelectBox from "../../components/input/SelectBoxStatic";
import PageBoard from "../../components/PageBoard";
import SearchBar from "../../components/SearchBar";

const Items = [{
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '2222',
  members: '1000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '2222',
  members: '1000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '2222',
  members: '1000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '2222',
  members: '1000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '2222',
  members: '1000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '2222',
  members: '1000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '20000',
  members: '210000',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '123123',
  members: '32323',
  diversity: "4545",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '11',
  members: '44',
  diversity: "22",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '',
  members: '2323',
  diversity: "666666",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}, {
  name: 'Zero Corruption',
  address: "0xD5c3Ed090F91d90176cF0A56F24c9F3962E17AFc",
  total_aum: '10000',
  members: '2451',
  diversity: "24000",
  avatar: `${process.env.PUBLIC_URL}/assets/avatar.png`
}]

const Dashboard = () => {

  const [selectedPage, selectPage] = useState(0);
  const getPager = useMemo(() => {
    let totalItems = Items.length;
    let currentPage = selectedPage;
    let pageSize = 5;
    // default to first page
    currentPage = currentPage || 1;
    // default page size is 10
    pageSize = pageSize || 10
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage, endPage;
    if (totalPages <= 5) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 3) { startPage = 1; endPage = 8; } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 3;
        endPage = currentPage + 4;
      }
    }
    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
    // return an object with all pager properties required by the view
    let a = pageSize * (selectedPage + 1) > Items.length ? Items.length % pageSize : pageSize;
    let arr = [];
    for (let index = 0; index < a; index++)
      arr.push(Items[selectedPage * pageSize + index]);
    return {
      // totalItems: totalItems,
      // currentPage: currentPage,
      // pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      // endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      selectedItems: arr,
      pages: pages
    };
  }, [selectedPage, Items])
  console.log(getPager.startPage, selectedPage)
  return (<PageBoard>
    <div className=" flex-col items-start w-full">
      <div className=" flex flex-col space-y-2 items-start">
        <h1 className=" text-2xl text-[#58CEA1] font-semibold">
          Active Communities
        </h1>
        <span className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          {Number(40000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        </span>
      </div>
      <div className="flex flex-col w-full mt-5 items-center">
        <div className="flex justify-between items-center space-x-2 w-full text-start">
          <span className="w-1/6 font-semibold">Desocs</span>
          <div className="w-1/6"><SearchBar /></div>
          <div className="w-1/6">
            <SelectBox list={[{ name: 'Score', _id: 0 }, { name: 'sample', _id: 1 }]} isIncludedImage={false} onChangeHandle={() => { }} />
          </div>
          <div className="w-1/6">
            <SelectBox list={[{ name: 'Metrics', _id: 0 }, { name: 'sample', _id: 1 }]} isIncludedImage={false} onChangeHandle={() => { }} />
          </div>
          <div className="w-1/6 flex justify-center ">
            <Ripple pointer onClick={() => { }}>
              <div className=" rounded-lg px-5 py-3 bg-black text-white flex items-center">Apply filter</div>
            </Ripple>
          </div>
          <div className="w-1/6">
            <Ripple pointer onClick={() => { }}>
              <div className=" rounded-lg px-5 py-3 bg-white text-[#58CEA1] flex items-center">Clear filter</div>
            </Ripple>
          </div>
        </div>
        <div className="w-full flex flex-col relative">
          <div className="flex text-center w-full justify-between font-semibold my-4 text-sm">
            <span className="flex-1">Name</span>
            <span className="flex-1">Total AUM</span>
            <span className="flex-1">Members</span>
            <span className="flex-1">Diversity</span>
            <span className="flex-1"></span>
          </div>
          <div className="w-full flex flex-col space-y-2 py-3">
            {getPager?.selectedItems.map((item, i) => {
              return <div className="flex text-center w-full justify-between items-center text-xs">
                <div className="flex-1 flex items-center">
                  <span className="mx-3 font-semibold">{getPager?.startIndex + i}</span>
                  <div className="flex space-x-2">
                    <img src={item.avatar} alt="avatar" className="w-7 h-7" />
                    <div className="flex flex-col items-start">
                      <span>{item.name}</span>
                      <span className=" text-[9px] text-gray-800">{item.address.substring(0, 5) +
                        "..." +
                        item.address.substring(
                          item.address.length - 4,
                          item.address.length)}</span>
                    </div>
                  </div>
                </div>
                <span className="flex-1">{item.total_aum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                <span className="flex-1">+{item.members.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                <span className="flex-1">{item.diversity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                <span className="flex-1 flex items-center justify-center w-full">
                  <Ripple pointer onClick={() => { }}>
                    <div className=" rounded-lg px-3 py-2 bg-white text-[#58CEA1] flex items-center border border-[#58CEA1]">View</div>
                  </Ripple>
                </span>
              </div>
            })}
          </div>
          <div className="flex items-center absolute -bottom-6 space-x-2 justify-between w-full">
            <div>Results: {getPager?.startIndex}-{getPager?.endIndex} of {Items.length}</div>
            <div className="flex items-center space-x-2">
              {selectedPage !== 0 && getPager?.pages.length > 0 ? <img
                src={`${process.env.PUBLIC_URL}/assets/Arrow - Left.svg`}
                alt="left"
                className=" mx-3 cursor-pointer w-3 h-3"
                onClick={() => { selectPage(selectedPage - 1); }}
              /> : <div className="w-9"></div>}
              {getPager?.pages.map((p, i) => (
                <RoundedButtonSM
                  key={i}
                  text={p}
                  active={selectedPage === i+1}
                  onButtonClick={() => {
                    selectPage(i+getPager.startPage);
                  }}
                />
              ))}
              {selectedPage < getPager?.totalPages - 1 && getPager?.pages.length > 0 ?
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Arrow - Right.svg`}
                  alt="right"
                  className=" mx-3 cursor-pointer w-3 h-3"
                  onClick={() => { selectPage(selectedPage + 1); }}
                /> : <div className="w-9"></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageBoard>)

}

export default Dashboard 