

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetTreeteam } from "../redux/slice/DashboardAndUser_slice";
// import { onlinUrl } from "../utils/Config";

// const TreeNode = React.memo(({ node, level, hoveredNode, setHoveredNode }) => {
//   return (
//     <li key={node.user_id} className="relative">
//       {/* Node Content */}
//       <div
//         onMouseEnter={() => setHoveredNode(node.user_id)}
//         onMouseLeave={() => setHoveredNode(null)}
//         className={`inline-block p-1 border border-gray-300 rounded-md text-xs text-black no-underline hover:bg-gray-100 transition-all ${
//           hoveredNode === node.user_id ? "w-40" : "w-28"
//         } mb-1 mx-1`} 
//       >
//         <a
//           href={`${onlinUrl}`}
//           className="block text-center"
//         >
//           <img
//             src="https://vnature.in/application/libraries/green.png"
//             alt="User"
//             className="mx-auto w-6 h-4"
//           />
//           <br />
//           {node.name}
//           <br />
//           {node.user_id}
//         </a>

//         {/* Additional Details on Hover */}
//         {hoveredNode === node.user_id && (
//           <div className="mt-1 text-center">
//             {/* <p>User Id: {node.user_id}</p>
//             <p>Name: {node.name}</p>
//             <p>Join By: {node.join_by}</p> */}
//             <p>Wallet: {node.wallet}</p>
//             <p>ROI Commission: {node.roi_comission}</p>
//            {/* <p>Phone: {node.phone}</p> */}
//              <p>DOJ: {node.datetime}</p>
//             {/* <p>Level: {node.level}</p> */}
//             <p>Self Payin: {node.self_payin}</p>
//             <p>Subordinate Payin: {node.subordinate_payin}</p>
//             <p>This Month Payin: {node.this_month_payin}</p> 
//           </div>
//         )}
//       </div>

//       {/* Render Children */}
//       {node.children && node.children.length > 0 && (
//         <div className="absolute top-0 left-1/2  transform -translate-x-1/2 border-l border-gray-300 h-4"></div> 
//       )}
//       {node.children && node.children.length > 0 && (
//         <ul className={`pl-5 relative  ${level > 0 ? "mt-1" : ""}`}> {/* Reduced margin-top */}
//           {node.children.map((child) => (
//             <TreeNode
//               key={child.user_id}
//               node={child}
//               level={level + 1}
//               hoveredNode={hoveredNode}
//               setHoveredNode={setHoveredNode}
//             />
//           ))}
//         </ul>
//       )}
//        {node.children && node.children.length > 0 && (
//         <div className="absolute top-0 right-1/2  transform -translate-x-1/2 border-l border-gray-300 h-4"></div> 
//       )}
//     </li>
//   );
// });

// const TreeStructure = () => {
//   const dispatch = useDispatch();
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   const alltreedata = useSelector(
//     (state) => state.dashboard_profile?.treeteamdata
//   );
//   const loading = useSelector((state) => state.dashboard_profile?.loading);

//   console.log("alltreedata --" , alltreedata)
//   useEffect(() => {
//     dispatch(GetTreeteam(userData?.user_id));
//   }, [dispatch, userData?.user_id]);

//   const [hoveredNode, setHoveredNode] = useState(null);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="h-screen">
//       <div className="card bg-white rounded-lg  h-full">
//         <div className="card-body p-1 h-full"> 
//           <div className="tree h-full">
//             <ul className="pl-5 relative">
//               {alltreedata?.map((node) => (
//                 <TreeNode
//                   key={node.user_id}
//                   node={node}
//                   level={0}
//                   hoveredNode={hoveredNode}
//                   setHoveredNode={setHoveredNode}
//                 />
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TreeStructure;


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetTreeteam } from "../redux/slice/DashboardAndUser_slice";
import { onlinUrl } from "../utils/Config";

const TreeNode = React.memo(({ node, level, hoveredNode, setHoveredNode, highlightedNodes }) => {
  const isHighlighted = highlightedNodes.includes(node.user_id);

  return (
    <li key={node.user_id} className="relative">
      {/* Node Content */}
      <div
        onMouseEnter={() => setHoveredNode(node.user_id)}
        onMouseLeave={() => setHoveredNode(null)}
        className={`inline-block p-1 border border-gray-300 rounded-md text-xs text-black no-underline hover:bg-gray-100 transition-all ${
          hoveredNode === node.user_id ? "w-40" : "w-28"
        } mb-1 mx-1 ${isHighlighted ? "bg-blue-100" : ""}`} 
      >
        {/* <a
          href={`${onlinUrl}`}
          className="block text-center"
        > */}
          <img
            src="https://vnature.in/application/libraries/green.png"
            alt="User"
            className="mx-auto w-6 h-4"
          />
          <br />
          {node.name}
          <br />
          {node.user_id}
        {/* </a> */}

        {/* Additional Details on Hover */}
        {hoveredNode === node.user_id && (
          <div className="mt-1 text-center">
            <p>Wallet: {node.wallet}</p>
            <p>ROI Commission: {node.roi_comission}</p>
            <p>DOJ: {node.datetime}</p>
            <p>Self Payin: {node.self_payin}</p>
            <p>Subordinate Payin: {node.subordinate_payin}</p>
            <p>This Month Payin: {node.this_month_payin}</p> 
          </div>
        )}
      </div>

      {/* Render Children */}
      {node.children && node.children.length > 0 && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-l border-gray-300 h-4"></div> 
      )}
      {node.children && node.children.length > 0 && (
        <ul className={`pl-5 relative ${level > 0 ? "mt-1" : ""}`}>
          {node.children.map((child) => (
            <TreeNode
              key={child.user_id}
              node={child}
              level={level + 1}
              hoveredNode={hoveredNode}
              setHoveredNode={setHoveredNode}
              highlightedNodes={highlightedNodes}
            />
          ))}
        </ul>
      )}
      {node.children && node.children.length > 0 && (
        <div className="absolute top-0 right-1/2 transform -translate-x-1/2 border-l border-gray-300 h-4"></div> 
      )}
    </li>
  );
});

const TreeStructure = () => {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const alltreedata = useSelector(
    (state) => state.dashboard_profile?.treeteamdata
  );
  const loading = useSelector((state) => state.dashboard_profile?.loading);

  useEffect(() => {
    dispatch(GetTreeteam(userData?.user_id));
  }, [dispatch, userData?.user_id]);

  const [hoveredNode, setHoveredNode] = useState(null);
  const [highlightedNodes, setHighlightedNodes] = useState([]);

  useEffect(() => {
    if (hoveredNode) {
      const findDescendants = (node) => {
        let descendants = [node.user_id]; 
        if (node.children) {
          node.children.forEach(child => {
            descendants = descendants.concat(findDescendants(child));
          });
        }
        return descendants;
      };

      const node = findNodeById(alltreedata, hoveredNode);
      if (node) {
        setHighlightedNodes(findDescendants(node));
      }
    } else {
      setHighlightedNodes([]);
    }
  }, [hoveredNode, alltreedata]);

  const findNodeById = (nodes, id) => {
    for (let node of nodes) {
      if (node.user_id === id) {
        return node;
      }
      if (node.children) {
        const found = findNodeById(node.children, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen">
      <div className="card bg-white rounded-lg h-full">
        <div className="card-body p-1 h-full"> 
          <div className="tree h-full">
            <ul className="pl-5 relative">
              {alltreedata?.map((node) => (
                <TreeNode
                  key={node.user_id}
                  node={node}
                  level={0}
                  hoveredNode={hoveredNode}
                  setHoveredNode={setHoveredNode}
                  highlightedNodes={highlightedNodes}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeStructure;