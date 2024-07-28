// components/RoadmapRenderer.tsx
import React from 'react';

interface RoadmapItem {
  title: string;
  children?: RoadmapItem[];
}

interface RoadmapData {
  title: string;
  children: RoadmapItem[];
}

interface RoadmapRendererProps {
  data: RoadmapData;
}

const RoadmapItem: React.FC<{ item: RoadmapItem; isRoot?: boolean }> = ({ item, isRoot = false }) => {
  return (
    <div className={`flex flex-col ${isRoot ? '' : 'ml-8'}`}>
      <div className={`border-2 border-gray-800 flex items-center mb-2 ${isRoot ? 'bg-yellow-300' : 'bg-yellow-200'} rounded-lg px-4 py-2`}>
        <span className="text-sm font-semibold">{item.title}</span>
        {!isRoot && (
          <div className="ml-2 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        )}
      </div>
      {item.children && item.children.length > 0 && (
        <div className="border-l-2 border-blue-400 pl-4">
          {item.children.map((child, index) => (
            <RoadmapItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const RoadmapRenderer: React.FC<RoadmapRendererProps> = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{data.title}</h1>
      <div className="flex justify-center">
        <div className="flex flex-col space-y-4">
          {data.children.map((item, index) => (
            <RoadmapItem key={index} item={item} isRoot={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapRenderer;