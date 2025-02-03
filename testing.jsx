

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetTreeteam } from "../redux/slice/DashboardAndUser_slice";
import { onlinUrl } from "../utils/Config";

const TreeNode = React.memo(({ node, level, hoveredNode, setHoveredNode }) => {
  return (
    <li key={node.user_id} className="relative">
      {/* Node Content */}
      <div
        onMouseEnter={() => setHoveredNode(node.user_id)}
        onMouseLeave={() => setHoveredNode(null)}
        className={`inline-block p-1 border border-gray-300 rounded-md text-xs text-black no-underline hover:bg-gray-100 transition-all ${
          hoveredNode === node.user_id ? "w-40" : "w-28"
        } mb-1 mx-1`} 
      >
        <a
          href={`${onlinUrl}`}
          className="block text-center"
        >
          <img
            src="https://vnature.in/application/libraries/green.png"
            alt="User"
            className="mx-auto w-6 h-4"
          />
          <br />
          {node.name}
          <br />
          {node.user_id}
        </a>

        {/* Additional Details on Hover */}
        {hoveredNode === node.user_id && (
          <div className="mt-1 text-center">
            {/* <p>User Id: {node.user_id}</p>
            <p>Name: {node.name}</p>
            <p>Join By: {node.join_by}</p> */}
            <p>Wallet: {node.wallet}</p>
            <p>ROI Commission: {node.roi_comission}</p>
           {/* <p>Phone: {node.phone}</p> */}
             <p>DOJ: {node.datetime}</p>
            {/* <p>Level: {node.level}</p> */}
            <p>Self Payin: {node.self_payin}</p>
            <p>Subordinate Payin: {node.subordinate_payin}</p>
            <p>This Month Payin: {node.this_month_payin}</p> 
          </div>
        )}
      </div>

      {/* Render Children */}
      {node.children && node.children.length > 0 && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-l border-gray-300 h-4"></div> // Reduced height of connecting lines
      )}
      {node.children && node.children.length > 0 && (
        <ul className={`pl-5 relative ${level > 0 ? "mt-1" : ""}`}> {/* Reduced margin-top */}
          {node.children.map((child) => (
            <TreeNode
              key={child.user_id}
              node={child}
              level={level + 1}
              hoveredNode={hoveredNode}
              setHoveredNode={setHoveredNode}
            />
          ))}
        </ul>
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen">
      <div className="card bg-white rounded-lg shadow-sm h-full">
        <div className="card-body p-1 h-full"> {/* Reduced padding */}
          <div className="tree h-full">
            <ul className="pl-5 relative">
              {alltreedata?.map((node) => (
                <TreeNode
                  key={node.user_id}
                  node={node}
                  level={0}
                  hoveredNode={hoveredNode}
                  setHoveredNode={setHoveredNode}
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







// css part

@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  overflow: auto !important;
  height: auto !important;
}


.choose-item {
    position: relative;
    overflow: auto;
    background-color: #fff; /* Default background */
    transition: transform 0.3s ease; /* Smooth scaling */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow effect */
  }
  
  .choose-item::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #deb271, #e0dcdc);
    transform: translateY(100%);
    transition: transform 0.5s ease-in-out; /* Smooth background transition */
    z-index: 0; /* Behind the content */
    
  }
  
  .choose-item:hover::before {
    transform: translateY(0); /* Move the gradient to cover the div */
  }
  
  .choose-item:hover {
    transform: scale(1.05); /* Slightly scale up the div */
  }
  
  .choose-item i,
  .choose-item h3,
  .choose-item p {
    position: relative;
    z-index: 1; /* Ensure text and icons are above the background */
    transition: color 0.3s ease; /* Smooth color transition */
  }
  
  .choose-item:hover h3,
  .choose-item:hover p {
    color: #fff; /* Change text color on hover */
  }
  

  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* X-offset, Y-offset, blur-radius, color */
  }


  .customshadiw{
    box-shadow: rgba(14, 30, 37, 0.12) 0px 1px 2px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}



.org-chart .oc-node {
  border-radius: 10px;
  background-color: white;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
.org-chart .oc-hierarchy {
  gap: 20px; /* Adjust spacing between nodes */
}
.org-chart .oc-edge {
  border-color: #d1d5db; /* Change line color */
}


body {
  font-family: Calibri, Segoe, "Segoe UI", "Gill Sans", "Gill Sans MT", sans-serif;
}

/* It's supposed to look like a tree diagram */
.tree, .tree ul, .tree li {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
}

.tree {
    margin: 0 0 1em;
    text-align: center;
}
.tree, .tree ul {
    display: table;
}
.tree ul {
  width: 100%;
}

.tree li {
    display: table-cell;
    padding: .5em 0;
    vertical-align: top;
}

.tree li:before {
    outline: solid 1px #666;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.tree li:first-child:before {left: 50%;}
.tree li:last-child:before {right: 50%;}

.tree code, .tree span {
    border: solid .1em #666;
    border-radius: .2em;
    display: inline-block;
    margin: 0 .2em .5em;
    padding: .2em .5em;
    position: relative;
}

.tree code {
    font-family: monaco, Consolas, 'Lucida Console', monospace;
}

.tree ul:before,
.tree code:before,
.tree span:before {
    outline: solid 1px #666;
    content: "";
    height: .5em;
    left: 50%;
    position: absolute;
}

.tree ul:before {
    top: -.5em;
}
.tree code:before,
.tree span:before {
    top: -.55em;
}


.tree > li {margin-top: 0;}
.tree > li:before,
.tree > li:after,
.tree > li > code:before,
.tree > li > span:before {
  outline: none;
}


.tree li:hover > ul > li > span {
  /* background-color: #ffeb3b; */
  transition: background-color 0.3s ease;
}

.tree li:hover > ul > li {
  /* background-color: #fff3e0;  */
}


/* .tree li span {
  position: relative;
  cursor: pointer;
}

.tree li span:hover::after {
  width: 20;
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #333;
  padding: 0.5em;
  border: 1px solid #666;
  border-radius: 0.2em;
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
} */

.tree li span {
  position: relative;
  cursor: pointer;
}

/* Tooltip Styling */
.tree li span:hover .tooltip-box {
  display: block;
}

.tooltip-box {
  display: none;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #333;
  padding: 8px 12px;
  border: 1px solid #666;
  border-radius: 5px;
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
  min-width: 180px;
}


/* ------------------  */



.carousel .control-arrow {
  top: 50% !important;
  transform: translateY(-50%) !important;
}