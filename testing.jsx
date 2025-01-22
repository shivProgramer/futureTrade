// import React from "react";
// import { FaUser } from "react-icons/fa";
// import SideBarHeader from "./SideBarHeader";
// import { GrWheelchairActive } from "react-icons/gr";
// import Lottie from "lottie-react";
// import moneygif from "../assets/money.json"
// import active from "../assets/active.json"
// import totatPayout from "../assets/payout.json"
// import Team from "../assets/team.json"
// import daily from "../assets/dailyincome.json"
// import totalaily from "../assets/total-daily-incom.json"
// import totalIncome from "../assets/total-income.json"
// import wallet from "../assets/wallet.json"
// import cashback from "../assets/cashback.json"
// const Dashboard = () => {
//   return (
//     <>
//     <SideBarHeader/>
//     <div className="flex-1 px-6 py-2">
    
//       <h1 className="text-3xl mb-4 font-semibold text-gray-800 text-shadow">
//         Downline Details
//       </h1>
//       <hr className="" />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
//         {/* Example of cards */}
//         <div className="bg-white p-[0.5rem] border-t-2 hover:shadow-xl border-green-500 rounded-lg shadow-md flex items-center justify-between gap-4">
//           {/* User Icon */}
//           <div className="bg-green-50 p-3 rounded-full">
            
//             <Lottie animationData={active} style={{ width: "50px" ,height:"50px", color:"green" }} />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col">
//             <span className="text-gray-800 font-bold text-xl">29,34</span>
//             <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
//               Active Downline
//             </span>
//           </div>
//         </div>

//         <div className="bg-white p-[0.5rem] border-t-2 hover:shadow-xl  border-green-500 rounded-lg shadow-md flex items-center justify-between gap-4">
//           {/* User Icon */}
//           <div className="bg-green-50 p-3 rounded-full">
     
//             <Lottie animationData={cashback} style={{ width: "50px" ,height:"50px", color:"green" }} />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col">
//             <span className="text-gray-800 font-bold text-xl">20,000</span>
//             <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
//               Team income
//             </span>
//           </div>
//         </div>

//         <div className="bg-white p-[0.5rem] border-t-2 hover:shadow-xl  border-green-500 rounded-lg shadow-md flex items-center justify-between gap-4">
//           {/* User Icon */}
//           <div className="bg-green-50 p-3 rounded-full">
//             {/* <FaUser className="text-4xl text-green-600" /> */}
//             <Lottie animationData={totatPayout} style={{ width: "50px" ,height:"50px", color:"green" }} />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col">
//             <span className="text-gray-800 font-bold text-xl">10,000</span>
//             <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
//               Total Payout
//             </span>
//           </div>
//         </div>

//         <div className="bg-white p-[0.5rem] border-t-2 hover:shadow-xl  border-yellow-500 rounded-lg shadow-md flex items-center justify-between gap-4">
//           {/* User Icon */}
//           <div className="bg-yellow-50 p-3 rounded-full">
        
//               <Lottie animationData={Team} style={{ width: "50px" ,height:"50px", color:"green" }} />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col">
//             <span className="text-gray-800 font-bold text-xl">20,000</span>
//             <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
//               Today Team Business
//             </span>
//           </div>
//         </div>
        
//         <div className="bg-white p-[0.5rem] border-t-2 hover:shadow-xl  border-yellow-500 rounded-lg shadow-md flex items-center justify-between gap-4">
//           {/* User Icon */}
//           <div className="bg-yellow-50 p-3 rounded-full">
//           <Lottie animationData={daily} style={{ width: "50px" ,height:"50px", color:"green" }} />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col">
//             <span className="text-gray-800 font-bold text-xl">20,000</span>
//             <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
//               Daily Income
//             </span>
//           </div>
//         </div>
        
//         <div className="bg-white p-[0.5rem] border-t-2 hover:shadow-xl  border-yellow-500 rounded-lg shadow-md flex items-center justify-between gap-4">
//           {/* User Icon */}
//           <div className="bg-yellow-50 p-3 rounded-full">
//           <Lottie animationData={totalaily} style={{ width: "50px" ,height:"50px", color:"green" }} />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col">
//             <span className="text-gray-800 font-bold text-xl">20,000</span>
//             <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
//               Total Daily Income
//             </span>
//           </div>
//         </div>
        
//         <div className="bg-white p-[0.5rem] border-t-2 hover:shadow-xl  border-blue-500 rounded-lg shadow-md flex items-center justify-between gap-4">
//           {/* User Icon */}
//           <div className="bg-blue-50 p-3 rounded-full">
//           <Lottie animationData={totalIncome} style={{ width: "50px" ,height:"50px", color:"green" }} />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col">
//             <span className="text-gray-800 font-bold text-xl">22,000</span>
//             <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
//               Total Income
//             </span>
//           </div>
//         </div>

//         <div className="bg-white p-[0.5rem] border-t-2 hover:shadow-xl  border-blue-500 rounded-lg shadow-md flex items-center justify-between gap-4">
//           {/* User Icon */}
//           <div className="bg-blue-50 p-3 rounded-full">
//           <Lottie animationData={wallet} style={{ width: "50px" ,height:"50px", color:"green" }} />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col">
//             <span className="text-gray-800 font-bold text-xl">20,000</span>
//             <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
//               Income Wallet
//             </span>
//           </div>
//         </div>

//         <div className="bg-white p-[0.5rem] border-t-2 hover:shadow-xl  border-blue-500 rounded-lg shadow-md flex items-center justify-between gap-4">
//           {/* User Icon */}
//           <div className="bg-blue-50 p-3 rounded-full">
//           <Lottie animationData={ moneygif} style={{ width: "50px" ,height:"50px", color:"green" }} />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col">
//             <span className="text-gray-800 font-bold text-xl">2,000</span>
//             <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
//               Cashback Income
//             </span>
//           </div>
//         </div>

//         <div className="bg-white p-[0.5rem] border-t-2 hover:shadow-xl  border-blue-500 rounded-lg shadow-md flex items-center justify-between gap-4">
//           {/* User Icon */}
//           <div className="bg-blue-50 p-3 rounded-full">
//                 <Lottie animationData={totatPayout} style={{ width: "50px" ,height:"50px", color:"green" }} />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col">
//             <span className="text-gray-800 font-bold text-xl">2,000</span>
//             <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
//               Total Payout
//             </span>
//           </div>
//         </div>

//       </div>
      // <div className="bg-gray-100 border border-gray-300 rounded-md shadow-md p-4 flex items-center mt-4">
      //   {/* Left Section */}
      //   <div className="bg-green-500 text-white font-semibold text-sm px-3 py-3 w-[10%] text-center rounded-l-md">
      //   Note
      //   </div>

      //   {/* Marquee Section */}
      //   <div className="flex-1 bg-white p-2 overflow-hidden ">
      //     <marquee className="text-gray-700 font-medium">
      //       This is a scrolling marquee text. Add your content here to make it
      //       scroll across the screen!
      //     </marquee>
      //   </div>

      // </div>
//     </div>
//     </>
//   );
// };

// export default Dashboard;


// --------------------------------------------------------------------------


// import React from "react";
// import Tree from "react-d3-tree";

// const UserTree = () => {
//   // Tree data with parents and children
//   const treeData = [
//     {
//       name: "Parent 1",
//       attributes: { role: "Admin" },
//       children: [
//         {
//           name: "Child 1.1",
//           attributes: { role: "User" },
//           children: [
//             { name: "Grandchild 1.1.1", attributes: { role: "Guest" } },
//             { name: "Grandchild 1.1.2", attributes: { role: "Editor" } },
//             { name: "Grandchild 1.1.2", attributes: { role: "Editor" } },
//             { name: "Grandchild 1.1.2", attributes: { role: "Editor" } },
//             { name: "Grandchild 1.1.2", attributes: { role: "Editor" } },
//           ],
//         },
//         {
//           name: "Child 1.2",
//           attributes: { role: "User" },
//         },
//       ],
//     },
//     {
//       name: "Parent 2",
//       attributes: { role: "Moderator" },
//       children: [
//         {
//           name: "Child 2.1",
//           attributes: { role: "Contributor" },
//           children: [
//             { name: "Grandchild 2.1.1", attributes: { role: "Viewer" } },
//             { name: "Grandchild 2.1.2", attributes: { role: "Admin" } },
//           ],
//         },
//       ],
//     },
//   ];

//   const renderMixedNodeElement = ({ nodeDatum }) => {
//     return (
//       <g>
//         {/* Circle Node */}
//         <circle r={15} fill="lightblue" stroke="black" strokeWidth="2" />

//         <foreignObject width={120} height={50} x={20} y={-25}>
//           <div
//             style={{
//               border: "1px solid black",
//               borderRadius: "5px",
//               backgroundColor: "#f9f9f9",
//               padding: "5px",
//               fontSize: "12px",
//             }}
//           >
//             <strong>{nodeDatum.name}</strong>
//             {nodeDatum.attributes && (
//               <div>Role: {nodeDatum.attributes.role}</div>
//             )}
//           </div>
//         </foreignObject>
//       </g>
//     );
//   };

//   const containerStyles = {
//     width: "100%",
//     height: "100vh",
//   };

//   return (
//     <div style={containerStyles}>
//       <Tree
//         data={treeData}
//         orientation="vertical" 
//         renderCustomNodeElement={renderMixedNodeElement} 
//         pathFunc="straight" 
//         separation={{ siblings: 1, nonSiblings: 2 }} 
//         translate={{ x: 400, y: 100 }} 
//         zoomable={true} // Enable zooming
//         initialDepth={Infinity} // Show all parent and child nodes initially
//       />
//     </div>
//   );
// };

// export default UserTree;
