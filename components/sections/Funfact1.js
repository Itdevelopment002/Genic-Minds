// components/Funfact1.js
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
});

const Funfact1 = () => {
    const [stats, setStats] = useState({
        projectsCompleted: 0,
        itSpecialists: 0,
        satisfiedClients: 0,
        smartSolutions: 0,
    });
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/stats');
                const data = await response.json();
                console.log('Fetched data from API:', data); // Log the fetched data
                
                // Directly set the stats since data is an object, not an array.
                setStats({
                    projectsCompleted: data?.projectsCompleted || 0,
                    itSpecialists: data?.itSpecialists || 0,
                    satisfiedClients: data?.satisfiedClients || 0,
                    smartSolutions: data?.smartSolutions || 0,
                });
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };
    
        fetchStats();
    }, []);
    
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/stats');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched data from API:', data); // Log the data received
    
                // Set the stats directly since the response is an object
                setStats({
                    projectsCompleted: data.projectsCompleted || 0,
                    itSpecialists: data.itSpecialists || 0,
                    satisfiedClients: data.satisfiedClients || 0,
                    smartSolutions: data.smartSolutions || 0,
                });
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };
    
        fetchStats();
    }, []);
    

    return (
        <section className="fun-fact-section">
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner">
                                <i className="icon flaticon-business-060-graph"></i>
                                <div className="count-box"><CounterUp count={stats.projectsCompleted} time={3} />+</div>
                                <h6 className="counter-title">Project completed</h6>
                            </div>
                        </div>

                        <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                                <i className="icon flaticon-business-035-helpline"></i>
                                <div className="count-box"><CounterUp count={stats.itSpecialists} time={3} />+</div>
                                <h6 className="counter-title">IT specialists</h6>
                            </div>
                        </div>

                        <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">
                                <i className="icon flaticon-business-020-hierarchy"></i>
                                <div className="count-box"><CounterUp count={stats.satisfiedClients} time={3} />+</div>
                                <h6 className="counter-title">Satisfied clients</h6>
                            </div>
                        </div>

                        <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                                <i className="icon flaticon-business-048-coin"></i>
                                <div className="count-box"><CounterUp count={stats.smartSolutions} time={3} />+</div>
                                <h6 className="counter-title">Smart solutions</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Funfact1;
