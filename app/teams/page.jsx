"use client";

import React, { useEffect, useRef } from 'react';
import { Users, Lightbulb, TrendingUp } from 'lucide-react';
export default function TeamsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('.card-animate');
    cards?.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.6s ease-out';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
  {
    name: 'Hitesh Shah',
    role: 'Investor',
    image: '/teams/hitesh.jpeg', // will replace when photo comes
    description: 'Visionary investor driving sustainable innovation and growth'
  },
  {
    name: 'Preet Shah',
    role: 'Managing Director',
    image: '/teams/founder.jpeg',
    description: 'Leading the company towards a greener future with strategic vision'
  },
  {
    name: 'Aayushee Shah',
    role: 'Creative & Strategy Head',
    image: '/teams/Aayushee.jpeg',
    description: 'Crafting innovative strategies and creative solutions for sustainability'
  },
  {
    name: 'Dhvani Damani',
    role: 'Partnar',
    image: '/teams/dhvani.png',
    description: 'Sustainability and Upcycling Coach'
  },
  {
    name: 'Shalin Shah',
    role: 'HR and Admin Manager',
    image: '/teams/shalin.jpeg',
    description: 'Managing HR operations and administrative workflows efficiently'
  },
  {
    name: 'Keya Panchal',
    role: 'Back Office and Accounts',
    image: '/teams/keya.jpeg',
    description: 'Handling accounts and ensuring smooth back-office operations'
  },
  {
    name: 'Gaurang Parekh',
    role: 'Digital Marketing Expert',
    image: '/teams/9.jpeg',
    description: 'Amplifying our eco-friendly message across digital platforms'
  },
  {
    name: 'Sangeeta Vaghela',
    role: 'Handwork and Sewing Specialist',
    image: '/teams/Sangeeta.jpeg',
    description: 'Expert in handcrafted and sewing-based product finishing'
  },
  {
    name: 'Mahesh Solanki',
    role: 'Office Boy and On-field Assistance',
    image: '/teams/mahesh.jpeg',
    description: 'Supporting office tasks and providing on-field assistance'
  },
  {
    name: 'Ashwin Mistry',
    role: 'Senior Peon',
    image: '/teams/5.jpeg', // will replace when photo comes
    description: 'Ensuring smooth office operations through support and logistics'
  }
];

  return (
    <div className="min-h-screen py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={containerRef}>

        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16 card-animate">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Users className="w-16 h-16 md:w-20 md:h-20 text-emerald-700" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-800 mb-4">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-emerald-600 mb-6">
            Meet the People Behind
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our dedicated team of professionals works tirelessly to create sustainable solutions
            and build a greener future for generations to come.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const isLastTwo = index >= teamMembers.length - 2;
            return (
              <div
                key={index}
                className={`card-animate bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  isLastTwo ? 'lg:col-start-2' : ''
                } ${index === teamMembers.length - 1 ? 'md:col-start-1 lg:col-start-auto' : ''}`}
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold text-center mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm text-center">
                    {member.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Photo Section */}
        <div className="card-animate mb-12 md:mb-16">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/teams/all.jpeg"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/30 to-transparent flex items-end">
              <div className="p-6 md:p-8 lg:p-12 w-full">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Our Production Teams
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Team Values Section */}
        <div className="card-animate bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-900" />
              </div>
              <h3 className="text-xl font-bold text-lime-300 mb-2">Collaboration</h3>
              <p className="text-white/90">
                Working together to achieve sustainable goals and create lasting impact
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-emerald-900" />
              </div>
              <h3 className="text-xl font-bold text-lime-300 mb-2">Innovation</h3>
              <p className="text-white/90">
                Constantly pushing boundaries to develop eco-friendly solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-900" />
              </div>
              <h3 className="text-xl font-bold text-lime-300 mb-2">Excellence</h3>
              <p className="text-white/90">
                Committed to delivering the highest quality in everything we do
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="card-animate bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-emerald-800 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision
            for a sustainable future. Get in touch to explore opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
}
