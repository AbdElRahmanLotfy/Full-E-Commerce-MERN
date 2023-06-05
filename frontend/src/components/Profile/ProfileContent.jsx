import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { backend_url } from "../../server";

import styles from "../../styles/styles";

import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineArrowRight, AiOutlineCamera, AiOutlineDelete } from "react-icons/ai";
import { MdOutlineTrackChanges } from "react-icons/md";
const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipCode, setZipCode] = useState();
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");

  const userAvatar = user?.avatar;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">

      {/* User Profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${userAvatar}`}
                alt="AvaTar"
                className="w-[90px] h-[90px] rounded-full object-cover border-[5px] border-[#43cf43]"
              />
              <div className="h-[25px] w-[25px] absolute bottom-[5px] left-[5px] rounded-full flex items-center justify-center cursor-pointer bg-[#070d4f]">
                <AiOutlineCamera color="#ffff" size={20} />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit}>
              <div className="w-full min-[800px]:flex pb-3 max-[800px]:flex-col">
                <div className="800px:w-[50%] w-full pb-2">
                  <label className="block pb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="800px:w-[50%] w-full pb-2">
                  <label className="block pb-2">Email</label>
                  <input
                    required
                    type="email"
                    className={`${styles.input} !w-[95%]`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full min-[800px]:flex pb-3 max-[800px]:flex-col">
                <div className="800px:w-[50%] w-full pb-2">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    required
                    type="number"
                    className={`${styles.input} !w-[95%]`}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="800px:w-[50%] w-full pb-2">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    required
                    type="number"
                    className={`${styles.input} !w-[95%]`}
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full min-[800px]:flex pb-3 max-[800px]:flex-col">
                <div className="800px:w-[50%] w-full pb-2">
                  <label className="block pb-2">Address 1</label>
                  <input
                    required
                    type="address"
                    className={`${styles.input} !w-[95%]`}
                    value={addressOne}
                    onChange={(e) => setAddressOne(e.target.value)}
                  />
                </div>
                <div className="800px:w-[50%] w-full pb-2">
                  <label className="block pb-2">Address 2</label>
                  <input
                    required
                    type="address"
                    className={`${styles.input} !w-[95%]`}
                    value={addressTwo}
                    onChange={(e) => setAddressTwo(e.target.value)}
                  />
                </div>
              </div>

              <input
                value="Update"
                required
                type="submit"
                className={`w-[250px] h-[35px] border border-[#161651] text-[#161651] text-center rounded-[4px] cursor-pointer`}
              />
            </form>
          </div>
        </>
      )}
      {/* User's Orders */}
      {active === 2 && (
        <div className="">
          <AllOrders />
        </div>
      )}
      {/* User's Refund */}
        {active === 3 && (
        <div className="">
          <AllRefundOrders />
        </div>
      )}
      {/* Tracking orders */}
        {active === 5 && (
        <div className="">
          <TrackOrders />
        </div>
      )}
         {/* Payment Method */}
        {active === 6 && (
        <div className="">
          <PaymentMethod />
        </div>
      )}
         {/* Address */}
         {active === 7 && (
        <div className="">
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "aasf3446r734kkj13hjb13k ",
      orderItems: [
        {
          name: "IPhone 14 Pro MAX",
        },
      ],
      totalPrice: 120,
      orderStatus: "Proccessing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        // pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const orders = [
    {
      _id: "aasf3446r734kkj13hjb13k ",
      orderItems: [
        {
          name: "IPhone 14 Pro MAX",
        },
      ],
      totalPrice: 120,
      orderStatus: "Proccessing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });
return (
  <div className="pl-8 pt-1">
       <DataGrid
        rows={row}
        columns={columns}
        // pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
  </div>
)
}

const TrackOrders = () => {
  const orders = [
    {
      _id: "aasf3446r734kkj13hjb13k ",
      orderItems: [
        {
          name: "IPhone 14 Pro MAX",
        },
      ],
      totalPrice: 120,
      orderStatus: "Proccessing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <MdOutlineTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
       <DataGrid
        rows={row}
        columns={columns}
        // pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  )
}

const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="min-[800px]:flex max-[800px]:flex-col w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#170d33] pb-2">
          Payment Methods
        </h1>
        <div className={`${styles.button}`}>
          <span className="text-[#fff]">Add New</span>
        </div>
      </div> 
      <br />

      <div className="w-full bg-[#fff] min-[800px]:h-[70px] max-[800px]:h-[150px] rounded-[7px] shadow min-[800px]:flex max-[800px]:flex-col items-center justify-between gap-5 px-3 pr-10 max-[800px]:pr-0">
        <div className="max-[800px]:justify-around flex  items-center w-full">
          <img src="https://cdn.worldvectorlogo.com/logos/visa-5.svg" alt="Visa"  className="h-[40px] w-[40px] object-cover"/>
          <h3 className="pl-3 font-[500]">AbdElRahman Lotfy</h3>
        </div>
        <div className="pl-8 flex items-center max-[800px]:justify-end max-[800px]:pr-7">
          <h4>*********119</h4>
        </div>
        <div className="pl-8 flex items-center max-[800px]:justify-end max-[800px]:pr-7">
          <h3 className="pl-4">10/2023</h3>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

const Address = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between max-[800px]:flex-col max-[800px]:items-start">
        <h1 className="text-[25px] font-[600] text-[#170d33] pb-2">
          My Addresses
        </h1>
        <div className={`${styles.button}`}>
          <span className="text-[#fff]">Add New</span>
        </div>
      </div> 
      <br />

      <div className="w-full bg-[#fff] h-[70px] max-[800px]:h-[200px] max-[800px]:text-center max-[800px]:py-3  rounded-[7px] shadow flex items-center justify-between px-3 pr-10 max-[800px]:flex-col">
        <div className="flex items-center">
          <h3 className="pl-5 font-[500]">AbdElRahman Lotfy</h3>
        </div>
        <div className="pl-8 flex items-center">
          <h4>Sheraton-AL-Matar 1184 B 3L</h4>
        </div>
        <div className="pl-8 flex items-center">
       
          <h3 className="pl-6">+2 012 113 460 21</h3>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}



export default ProfileContent;
