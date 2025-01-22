


// import React from 'react';
// import Tree from 'react-d3-tree';
// import { User } from 'lucide-react';

// // Organization data structure
// const userData = {
//   name: "John Smith",
//   attributes: {
//     role: "CEO",
//     id: 1
//   },
//   children: [
//     {
//       name: "Sarah Johnson",
//       attributes: {
//         role: "CTO",
//         id: 2
//       },
//       children: [
//         {
//           name: "Mike Wilson",
//           attributes: {
//             role: "Lead Dev",
//             id: 5
//           },
//           children: [
//             {
//               name: "Alex Turner",
//               attributes: {
//                 role: "Frontend",
//                 id: 8
//               }
//             },
//             {
//               name: "Emma Davis",
//               attributes: {
//                 role: "Backend",
//                 id: 9
//               }
//             }
//           ]
//         },
//         {
//           name: "Lisa Anderson",
//           attributes: {
//             role: "DevOps",
//             id: 6
//           }
//         }
//       ]
//     },
//     {
//       name: "David Brown",
//       attributes: {
//         role: "CFO",
//         id: 3
//       },
//       children: [
//         {
//           name: "Robert Taylor",
//           attributes: {
//             role: "Finance",
//             id: 7
//           }
//         }
//       ]
//     },
//     {
//       name: "Emily White",
//       attributes: {
//         role: "CMO",
//         id: 4
//       },
//       children: [
//         {
//           name: "Sophie Green",
//           attributes: {
//             role: "Marketing",
//             id: 10
//           },
//           children: [
//             {
//               name: "Tom Harris",
//               attributes: {
//                 role: "Content",
//                 id: 11
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

// // Custom node component
// const renderCustomNode = ({ nodeDatum, toggleNode }) => (
//   <g>
//     <foreignObject x="-60" y="-25" width="120" height="50">
//       <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
//         <div className="flex items-center gap-2">
//           <div className="bg-blue-50 p-1 rounded-full">
//             <User className="w-3 h-3 text-blue-600" />
//           </div>
//           <div className="text-left">
//             <div className="text-xs font-medium text-gray-900 leading-tight">{nodeDatum.name}</div>
//             <div className="text-[10px] text-gray-500 leading-tight">{nodeDatum.attributes.role}</div>
//           </div>
//         </div>
//       </div>
//     </foreignObject>
//   </g>
// );

// function TreeTeam() {
//   return (
//     <div className="h-screen bg-gray-50">
//       <div className="h-full w-full">
//         <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
//           <h1 className="text-2xl font-bold text-gray-900">Organization Tree</h1>
//         </div>
//         <Tree
//           data={userData}
//           orientation="vertical"
//           renderCustomNodeElement={renderCustomNode}
//           pathClassFunc={() => 'stroke-gray-300'}
//           separation={{ siblings: 2, nonSiblings: 2.5 }}
//           translate={{ x: window.innerWidth / 2, y: 100 }}
//           nodeSize={{ x: 160, y: 100 }}
//           zoomable={true}
//           draggable={false}
//           collapsible={false}
//         />
//       </div>
//     </div>
//   );
// }

// export default TreeTeam;











import React, { useEffect, useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import { User } from 'lucide-react';

// Organization data structure
const userData = {
  name: "John Smith",
  attributes: {
    role: "CEO",
    id: 1
  },
  children: [
    {
      name: "Sarah Johnson",
      attributes: {
        role: "CTO",
        id: 2
      },
      children: [
        {
          name: "Mike Wilson",
          attributes: {
            role: "Lead Dev",
            id: 5
          },
          children: [
            {
              name: "Alex Turner",
              attributes: {
                role: "Frontend",
                id: 8
              }
            },
            {
              name: "Emma Davis",
              attributes: {
                role: "Backend",
                id: 9
              }
            }
          ]
        },
        {
          name: "Lisa Anderson",
          attributes: {
            role: "DevOps",
            id: 6
          }
        }
      ]
    },
    {
      name: "David Brown",
      attributes: {
        role: "CFO",
        id: 3
      },
      children: [
        {
          name: "Robert Taylor",
          attributes: {
            role: "Finance",
            id: 7
          }
        }
      ]
    },
    {
      name: "Emily White",
      attributes: {
        role: "CMO",
        id: 4
      },
      children: [
        {
          name: "Sophie Green",
          attributes: {
            role: "Marketing",
            id: 10
          },
          children: [
            {
              name: "Tom Harris",
              attributes: {
                role: "Content",
                id: 11
              }
            }
          ]
        }
      ]
    }
  ]
};

// Custom node component
const renderCustomNode = ({ nodeDatum }) => (
  <g>
    <foreignObject x="-60" y="-25" width="120" height="50">
      <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-blue-50 p-1 rounded-full">
            <User className="w-3 h-3 text-blue-600" />
          </div>
          <div className="text-left">
            <div className="text-xs font-medium text-gray-900 leading-tight">{nodeDatum.name}</div>
            <div className="text-[10px] text-gray-500 leading-tight">{nodeDatum.attributes.role}</div>
          </div>
        </div>
      </div>
    </foreignObject>
  </g>
);

function TreeTeam() {
  const treeContainerRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (treeContainerRef.current) {
        const { width, height } = treeContainerRef.current.getBoundingClientRect();
        setTranslate({ x: width / 2, y: 50 });
      }
    };

    handleResize(); // Set initial dimensions
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen bg-gray-50">
      <div className="h-full w-full" ref={treeContainerRef}>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <h1 className="text-2xl font-bold text-gray-900">Organization Tree</h1>
        </div>
        <Tree
          data={userData}
          orientation="vertical"
          renderCustomNodeElement={renderCustomNode}
          pathClassFunc={() => 'stroke-gray-300'}
          separation={{ siblings: 2, nonSiblings: 2.5 }}
          translate={translate}
          nodeSize={{ x: 160, y: 100 }}
          zoomable={true}
          draggable={false}
          collapsible={false}
        />
      </div>
    </div>
  );
}

export default TreeTeam;
