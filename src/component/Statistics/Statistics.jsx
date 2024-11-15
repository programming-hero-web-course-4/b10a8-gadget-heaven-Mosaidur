import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import NavBar from '../NavBar/NavBar';
import {Helmet} from "react-helmet";

// Sample data for the chart
const data = [
  { name: 'Audio', np: 3},
  { name: 'Wearable', np: 2},
  { name: 'Cameras', np: 3},
  { name: 'Accessories', np: 3},
  { name: 'Smart Home', np: 4},
];

// Custom bar shape for the chart
const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Statistics = () => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Dora Gadget || Statistics</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <NavBar></NavBar>
        <div>
            <div className="text-center space-y-5 py-16 bg-[#9538E2] p-5">
                <h1 className="font-bold md:text-5xl text-2xl text-white">Statistics</h1>
                <p className="text-white md:text-base text-xs">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to<br />
                the coolest accessories, we have it all!
                </p>
            </div>

            <div className='max-w-6xl mx-auto p-5'>
                <div className='max-w-6xl mx-auto'>
                <div className='flex items-center justify-between py-10'>
                    <h1 className='font-bold text-xl'>Statistics</h1>
                </div>
                </div>

                <div className='flex justify-center'>
                {/* Bar chart */}
                <BarChart width={1080} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="np" fill="#9538E2" shape={<TriangleBar />} />
                </BarChart>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Statistics;
