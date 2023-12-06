"use client"
import React, {useState} from 'react';
import '../app/style.css/sidebar.scss'
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import { usePathname } from "next/navigation"
const SideBar = () => {
    const navbar = [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "Projects",
            path: "/projects"
        },
        {
            id: 1,
            title: "Departments",
            path: "/departments"
        },
    ]
    const dept = [
        {
            id: 1,
            title: "Infromation Technology",
            path: "/info"
        },
        {
            id: 2,
            title: "Digital Banking",
            path: "/digital"
        },
        {
            id: 1,
            title: "Risk Management",
            path: "/risk"
        },
    ]
    const proj = [
        {
            id: 1,
            dept: "Infromation Technology",
            title: "Fix CIT",
        },
        {
            id: 2,
            dept: "Infromation Technology",
            title: "Connect Mivers",
        },
        {
            id: 3,
            dept: "Risk Management",
            title: "Document",
        },
    ]
    const pathname = usePathname()

  // Now you can use the pathname and query variables to determine the current route
  console.log('Current Path:', pathname);

    const [workplace, setWorkplace] = useState(true);
    const [projects, setProjects] = useState(true);
    const [open, setOpen] = useState(false);
    const [openProject, setOpenProject] = useState(false);
    const addWorkplace = () => {
        console.log("addWorkplace");
    }
    const addProjects = () => {
        console.log("addProjects");
    }
    const openDept = () => {
        setOpen(!open)
    }
    const openProjects = () => {
        setOpenProject(!openProject)
    }
    return (
        <secton className="sidebar">
            <div className="menu">
                {
                    navbar.map(((item)=>(
                        <Link className={pathname == item.path && "disp"} key={item.id} href={item.path}>{item.title}</Link>
                    )))
                }
            </div>
            <div className="workplace">
                {
                    workplace && (
                        <div className="workCont">
                            <div className="dept">
                                <span className="title" onClick={openDept}>Departments</span>
                                <span className="dept-icon" onClick={addWorkplace}><FaPlus /></span>
                            </div>
                            <div className={`depts ${open ? "open" : "closed"}`}>
                                {
                                    dept.map((item)=>(
                                        <Link className={pathname == item.path && "disp"}  href={item.path}>{item.title}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="workplace">
                {
                    projects && (
                        <div className="workCont">
                            <div className="dept">
                                <span className="title" onClick={openProjects}>Projects</span>
                                <span className="dept-icon" onClick={addProjects}><FaPlus /></span>
                            </div>
                            <div className={`depts ${openProject ? "open" : "closed"}`}>
                                {
                                    proj.map((item)=>(
                                        <Link href={`/${item.dept}/${item.title.toLowerCase()}`}>{item.title}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </secton>
    )
}

export default SideBar;