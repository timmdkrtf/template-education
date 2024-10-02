import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from 'react-bootstrap/Badge';

import History from "../assets/img/cover/history-cover.jpg"
import Math from "../assets/img/cover/math-cover.jpg"
import Math2 from "../assets/img/cover/math-cover2.jpg"
import Social from "../assets/img/cover/happy-cover.jpg"
import Robotic from "../assets/img/cover/robotic-cover.jpg"
import Science from "../assets/img/cover/science-cover.jpg"
import Teamwork from "../assets/img/cover/teamwork-cover.jpg"

function Packet() {
  const [filter, setFilter] = useState('all');

  const menuItems = [
    { 
        id: 1, 
        category: 'history', 
        name: 'Kumpulan Biografi Pahlawan', 
        paragraf: 'Kamu dapat memahami dan mendalami alur hidup pahlawan disini', 
        badge: 'free',
        imgSrc: History
    },
    { 
        id: 2, 
        category: 'math', 
        name: 'Bilangan Bulat', 
        paragraf: 'Cari dan temukan cara mudah untuk mengerjakan bilangan bulat', 
        badge: 'paid',
        imgSrc: Math
    },
    { 
        id: 3, 
        category: 'social', 
        name: 'Cara mudah pahami IT 5.0', 
        paragraf: 'Di era saat ini, ini kita sangat perlu dalam memahami kemajuan teknologi', 
        badge: 'paid',
        imgSrc: Social
    },
    { 
        id: 4, 
        category: 'science', 
        name: 'Sejarah Kimia',
        paragraf: 'Ketahui awal mula ilmu kimia muncul hingga berkembang saat ini',
        badge: 'free',
        imgSrc: Science
    },
    { 
        id: 5, 
        category: 'robotic', 
        name: 'Mengenal Arduino', 
        paragraf: 'Mempelajari arduino adalah cara awal untuk terjun di dunia robotic', 
        badge: 'free',
        imgSrc: Robotic
    },
    {
        id: 6,
        category: 'teamwork',
        name: 'Kerja sama yang unik',
        paragraf: 'Ketahuilah dan tingkatkan sistem kerjasama dengan timmu',
        badge: 'paid',
        imgSrc: Teamwork
    },
    {
        id: 7,
        category: 'math',
        name: 'Integral',
        paragraf: 'Pelajari dan temukan rumus integral sesuai dengan kebisaanmu',
        badge: 'free',
        imgSrc: Math2
    },
  ];

  const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

  return (
    <div className="packet" id="packet">
      <div className="container">
        <div className="title">
          <p>Our Program</p>
          <h2>The Most Popular</h2>
        </div>
        <div className="content">
          <div className="button-filter">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
            <button onClick={() => setFilter('history')} className={filter === 'history' ? 'active' : ''}>History</button>
            <button onClick={() => setFilter('math')} className={filter === 'math' ? 'active' : ''}>Math</button>
            <button onClick={() => setFilter('social')} className={filter === 'social' ? 'active' : ''}>Social</button>
            <button onClick={() => setFilter('robotic')} className={filter === 'robotic' ? 'active' : ''}>Robotic</button>
            <button onClick={() => setFilter('science')} className={filter === 'science' ? 'active' : ''}>Science</button>
            <button onClick={() => setFilter('teamwork')} className={filter === 'teamwork' ? 'active' : ''}>Teamwork</button>
          </div>
          <div className="row packet-content">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  className="packet-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Badge bg={item.badge == "free" ? "success": "secondary"}>{item.badge}</Badge>
                  <img src={item.imgSrc} alt={item.name} />
                  <div className='text'>
                    <h6>{item.name}</h6>
                    <p>{item.paragraf}</p>
                    <a href="">
                        <button>Pelajari</button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packet;
