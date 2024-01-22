import React, { useState, useEffect, useRef, useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import { callAPI } from '../utils/API';
import { decode } from 'html-entities';

export default function ExpertPage() {
    const expertPage = document.querySelector('.expert-page')

    if (expertPage) {
        renderElement()
    }
}

function Profile({profile}) {
    // console.log(profile);
    return (
        <div className="">
            <a href={profile.link}>
                <img className="img-fluid" src={profile.profile_img} alt={profile.name} />
                <h5 className="pt-3 fw-bold">{profile.name}</h5>
            </a>
            <div className="pt-1">
                <p>{profile.position_title}</p>
                <p className="fst-italic">{profile.location}</p>

                <ul className="">
                    <a href={`mailto:${profile.email}`}>
                        <li>
                            <i className="fa fa-envelope"></i>
                        </li>
                    </a>
                    <a href={`tel:${profile.contact_no}`}>
                        <li>
                            <i className="fa fa-phone"></i>
                        </li>
                    </a>
                    <a href={profile.linkedin} target="blank_">
                        <li>
                            <i className="fa fa-linkedin"></i>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

function Filter({filter}) {
    const [expertsData, setExpertsData] = useState(filter.experts)
    const [toggleIndustry, setToggleIndustry] = useState(false)
    const [toggleLocation, setToggleLocation] = useState(false)

    const [data, setData] = useState([])
    const [currentItems, setCurrentItems] = useState(expertsData)

    const [currentIndustry, setCurrentIndustry] = useState(expertsData)
    const [currentLocation, setCurrentLocation] = useState(expertsData)

    const myRef = useRef(null)

    const [i, setI] = useState('')
    const [industry, setIndustry] = useState(filter.industry_taxonomy)
    const industryRef = useRef()

    const [l, setL] = useState('')
    const [location, setLocation] = useState(filter.location_taxonomy)
    const locationRef = useRef()

    const [q, setQ] = useState('')

    const toggleIndustryOpen = () => {

        setToggleIndustry(!toggleIndustry)
        const industryToggleButton = document.querySelectorAll('#industry-selection')
        if (!industryToggleButton) return

        document.addEventListener('click', function (event) {
            // Check whether document click matching with Array element
            let clickArray = []
            Array.from(industryToggleButton).forEach((el) => {
                const getInner = el.contains(event.target)
                clickArray.push(getInner)
            })
            // Return `true` if even one of the Array is `true`
            const isTrue = (value) => value == true
            const isClickInside = clickArray.some(isTrue)

            // Click outside to remove `is-open` class
            if (!isClickInside) {
                industryToggleButton.forEach((button) => {
                    if (button.classList.contains('is-open')) {
                        industryToggleButton.forEach((el) => el.classList.remove('is-open'))
                    }
                })
            }
        })
    }

    const toggleLocationOpen = () => {

        setToggleLocation(!toggleLocation)
        const locationToggleButton = document.querySelectorAll('#location-selection')
        if (!locationToggleButton) return

        document.addEventListener('click', function (event) {
            // Check whether document click matching with Array element
            let clickArray = []
            Array.from(locationToggleButton).forEach((el) => {
                const getInner = el.contains(event.target)
                clickArray.push(getInner)
            })
            // Return `true` if even one of the Array is `true`
            const isTrue = (value) => value == true
            const isClickInside = clickArray.some(isTrue)

            // Click outside to remove `is-open` class
            if (!isClickInside) {
                locationToggleButton.forEach((button) => {
                    if (button.classList.contains('is-open')) {
                        locationToggleButton.forEach((el) => el.classList.remove('is-open'))
                    }
                })
            }
        })
    }

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {

        if (myRef.current) {
            window.scrollTo({
                top: myRef.current.offsetTop - 100,
                behavior: 'smooth'
            });
        }    
    };

    useEffect(() => {
        let tempData = []

        if (i !== '') {
            tempData = filter.experts.filter(select => select ? select.industry.includes(i) : select)
        } else if (l !== '') {
            tempData = filter.experts.filter(select => select ? select.location.includes(l) : select)
        } else if (q !== '') {
            tempData = filter.experts.filter(select => select ? select.location.toLowerCase().includes(q.toLowerCase()) || select.name.toLowerCase().includes(q.toLowerCase()) || select.position_title.toLowerCase().includes(q.toLowerCase()) : select)
        }
        
        if (i !== '' && l !== '' && q !== '') {
            tempData = filter.experts.filter(select => select.industry.includes(i) && select.location.includes(l) && (select.location.toLowerCase().includes(q.toLowerCase()) || select.name.toLowerCase().includes(q.toLowerCase()) || select.position_title.toLowerCase().includes(q.toLowerCase())))
        }
        setCurrentItems(tempData)
        
        if (i === '' && l === '' && q === '') {
            setCurrentItems(expertsData)
        }
    }, [i, l, q, expertsData])

    useEffect(() => {
        setData(currentItems) 
        
        if (toggleIndustry) {

            const industryToggleButton = document.querySelector('#industry-selection') 
            if (!industryToggleButton) return

            const industrySelectionItems = industryToggleButton.querySelectorAll('.selection__list-item')

            industrySelectionItems.forEach((button, index) => {
                button.addEventListener('click', (e) => {
                    industryRef.current.innerHTML = button.innerHTML
                    handlePageClick(e)
                })
            })
        }

        if (toggleLocation) {
            const locationToggleButton = document.querySelector('#location-selection') 
            if (!locationToggleButton) return

            const locationSelectionItems = locationToggleButton.querySelectorAll('.selection__list-item')

            locationSelectionItems.forEach((button, index) => {
                button.addEventListener('click', (e) => {
                    locationRef.current.innerHTML = button.innerHTML
                    handlePageClick(e)
                })
            })
        }

    }, [currentIndustry, toggleIndustry, toggleLocation, currentLocation, currentItems])

    return (
        <>
            <div className="container d-lg-flex pb-5">
                <div className="col-12 col-lg-7">
                    <h3>FILTERS</h3>
                    <div className="d-lg-flex align-items-center m-auto">
                        <div id="industry-selection" className={`position-relative ${!toggleIndustry ? null : 'is-open' }`} onClick={(toggleIndustryOpen)}>
                            <div className="btn-selection__content">
                                <div className="btn-selection__value" ref={industryRef}>Sector</div>
                                <div className="dropdown-arrow"></div>
                            </div>
                            <div className="selection__list">
                                <ul className="selection__list-items ls-0">
                                    <li className="selection__list-item" onClick={() => setI('')} data-value="">All</li>
                                    {
                                        industry.map(fil => 
                                            <li key={fil[0]} className="selection__list-item" onClick={() => setI(fil[0])} data-value={fil[0]}>{decode(fil[0])}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="pipeline"></div>

                        <div id="location-selection" className={`position-relative ${!toggleLocation ? null : 'is-open' }`} onClick={(toggleLocationOpen)}>
                            <div className="btn-selection__content">
                                <div className="btn-selection__value" ref={locationRef}>Location</div>
                                <div className="dropdown-arrow"></div>
                            </div>
                            <div className="selection__list">
                                <ul className="selection__list-items ls-0">
                                    <li className="selection__list-item" onClick={() => setL('')} data-value="">All</li>
                                    {
                                        location.map(fil => 
                                            <li key={fil[0]} className="selection__list-item" onClick={() => setL(fil[0])} data-value={fil[0]}>{decode(fil[0])}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-5">
                    <h3>SEARCH</h3>
                    <div className="input-field position-relative">
                        <input className="w-100" type="search" value={q} onChange={(e) => setQ(e.target.value)}></input>
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            </div>

            <div className="bg-white" id="expert-page">
                <div className="container p-5">
                    <div className="d-grid grid-lg-4 text-center">
                    {data.length > 0 ? (
                        data.map(prof => <Profile key={prof.name} profile={prof} />)
                    ) : (
                        <div>
                            Empty
                        </div>
                    )
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

const renderElement = async () => {
    var windowUrl = window.location.protocol + '//' + window.location.host;
    const API = {
        'experts': {
            api: windowUrl + '/API/ajax_get-experts.php'
        }
    }

    const APIURL = API.experts.api
    const response = callAPI(APIURL)
    await response

    response.then(function(result) {
        const root = ReactDOM.createRoot(document.getElementById('filter-section'))
    
        root.render(
            <div>
                <Filter filter={result} />
            </div>
        )
    })

}

// const renderElement = async () => {
//     var windowUrl = window.location.protocol + '//' + window.location.host;
//     const API = {
//         'experts': {
//             api: windowUrl + '/API/ajax_get-experts.php'
//         }
//     }

//     const APIURL = API.experts.api
//     const response = callAPI(APIURL)
//     await response

//     response.then(function(result) {
//         const root = ReactDOM.createRoot(document.getElementById('expert-page'))
    
//         root.render(
//             <div>
//                 <ProfileParent profile={result} />
//             </div>
//         )
//     })
// }