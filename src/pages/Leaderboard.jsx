import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Trophy, TrendingUp, Medal } from 'lucide-react';
import Card from '../components/ui/Card';

const leaderboardData = [
  { rank: 1, name: 'Elena R.', score: 145200, level: 'Earth Guardian', avatar: 'ER' },
  { rank: 2, name: 'Marcus T.', score: 132450, level: 'Forest Master', avatar: 'MT' },
  { rank: 3, name: 'Sarah K.', score: 118900, level: 'Forest Master', avatar: 'SK' },
  { rank: 4, name: 'David L.', score: 98400, level: 'Eco Warrior', avatar: 'DL' },
  { rank: 5, name: 'Anna J.', score: 85200, level: 'Eco Warrior', avatar: 'AJ' },
  { rank: 6, name: 'Tom H.', score: 76000, level: 'Tree Planter', avatar: 'TH' },
  { rank: 7, name: 'Mia W.', score: 62000, level: 'Tree Planter', avatar: 'MW' },
  { rank: 89, name: 'John Doe', score: 12450, level: 'Eco Warrior', avatar: 'JD', isCurrentUser: true },
];

const Leaderboard = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-ts-forest mb-4 flex items-center justify-center gap-3">
          <Trophy className="text-amber-500 w-10 h-10" /> Global Leaderboard
        </h1>
        <p className="text-gray-600">See how your impact compares to other eco-warriors.</p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 items-end mb-12 mt-16 px-4">
        {/* Spot 2 */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold shadow-lg border-4 border-[#C0C0C0] mb-4 z-10 relative">
            {leaderboardData[1].avatar}
            <div className="absolute -top-3 -right-3 bg-[#C0C0C0] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">2</div>
          </div>
          <Card className="w-full bg-gradient-to-t from-[#F5F5F5] to-white border-[#E0E0E0] text-center pt-8 pb-4 relative -mt-10 rounded-t-xl rounded-b-none h-32 md:h-40 flex flex-col justify-end">
            <p className="font-bold text-sm md:text-base truncate px-1">{leaderboardData[1].name}</p>
            <p className="text-ts-green font-extrabold text-sm md:text-lg"><CountUp end={leaderboardData[1].score} duration={2} separator="," /></p>
          </Card>
        </motion.div>

        {/* Spot 1 */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col items-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-100 flex items-center justify-center text-2xl font-bold shadow-xl border-4 border-[#FFD700] mb-4 z-10 relative">
            {leaderboardData[0].avatar}
            <div className="absolute -top-3 -right-3 bg-[#FFD700] text-amber-900 text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-md">1</div>
          </div>
          <Card className="w-full bg-gradient-to-t from-amber-50 to-white border-amber-200 text-center pt-10 pb-6 relative -mt-12 rounded-t-xl rounded-b-none h-40 md:h-48 flex flex-col justify-end shadow-2xl">
            <p className="font-bold text-ts-forest text-base md:text-lg truncate px-1">{leaderboardData[0].name}</p>
            <p className="text-amber-600 font-extrabold text-lg md:text-xl"><CountUp end={leaderboardData[0].score} duration={2.5} separator="," /></p>
          </Card>
        </motion.div>

        {/* Spot 3 */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-100 flex items-center justify-center text-xl font-bold shadow-lg border-4 border-[#CD7F32] mb-4 z-10 relative">
            {leaderboardData[2].avatar}
            <div className="absolute -top-3 -right-3 bg-[#CD7F32] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">3</div>
          </div>
          <Card className="w-full bg-gradient-to-t from-[#FFF5EE] to-white border-[#F0E6D2] text-center pt-8 pb-4 relative -mt-10 rounded-t-xl rounded-b-none h-28 md:h-36 flex flex-col justify-end">
            <p className="font-bold text-sm md:text-base truncate px-1">{leaderboardData[2].name}</p>
            <p className="text-[#CD7F32] font-extrabold text-sm md:text-lg"><CountUp end={leaderboardData[2].score} duration={1.5} separator="," /></p>
          </Card>
        </motion.div>
      </div>

      {/* List */}
      <Card className="bg-white/60 p-0 overflow-hidden">
        <ul className="divide-y divide-gray-100">
          {leaderboardData.slice(3).map((user, idx) => (
            <motion.li 
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (idx * 0.1) }}
              className={`p-4 sm:p-6 flex items-center justify-between transition-colors hover:bg-white/80 ${user.isCurrentUser ? 'bg-emerald-50/80 border-l-4 border-ts-green' : ''}`}
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className={`w-8 font-bold text-gray-400 text-center ${user.isCurrentUser ? 'text-ts-green' : ''}`}>
                  #{user.rank}
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-ts-light text-ts-green flex items-center justify-center font-bold text-sm">
                  {user.avatar}
                </div>
                <div>
                  <h4 className={`font-bold ${user.isCurrentUser ? 'text-ts-green' : 'text-gray-800'}`}>
                    {user.name} {user.isCurrentUser && <span className="ml-2 text-xs bg-ts-green text-white px-2 py-0.5 rounded-full font-medium">You</span>}
                  </h4>
                  <p className="text-xs text-gray-500 hidden sm:block">{user.level}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold border border-green-200 bg-green-50 text-ts-forest px-3 py-1 rounded-lg inline-flex items-center gap-1 text-sm">
                  <TrendingUp className="w-3 h-3 text-ts-green" />
                  <CountUp end={user.score} duration={2} separator="," />
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Leaderboard;
