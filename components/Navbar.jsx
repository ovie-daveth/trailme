"use client"
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { SiTeratail } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "../app/style.css/nav.css"
import Image from 'next/image';import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  


const Navbar = () => {
    const menu = [
        {
            id: 1,
            title: "Department",
        },
        {
            id: 2,
            title: "Units",
        },
        {
            id: 3,
            title: "Projects",
        },
    ]
    const dept = [
        {
            id: 1,
            title: "Information Technology",
        },
        {
            id: 2,
            title: "Digital Banking",
        },
    ]
    return(
        <div className="nav">
            <div className="menus">
                <div className="logo">
                    <span className="logo-icon"><SiTeratail /></span>
                    <h1 className="logo-title">Trail<span>Me</span></h1>
                </div>
                <ul className="menu-items">
                    {
                        menu.map((item)=>{
                            return(
                                <DropdownMenu key={item.id}>
                                <DropdownMenuTrigger className="li">{item.title}</DropdownMenuTrigger>
                                <DropdownMenuContent key={item.id}>
                                  <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  {
                                    dept.map((item)=>(
                                        <>
                                            <DropdownMenuItem key={item.id}>{item.title}</DropdownMenuItem>
                                        </>
                                    ))
                                  }
                                </DropdownMenuContent>
                              </DropdownMenu>
                              
                            )
                        })
                    }
                </ul>
                <Button variant="destructive" className="buttonCreate">Create</Button>
            </div>
            <div className="formSearch">
                <form action="">
                    <input type="search" placeholder="search" className="search" />
                </form>
                <div className="notify">
                    <span>1</span>
                    <IoIosNotifications className="icon-notify"/>
                </div>
                <div className="faq">
                <AiOutlineQuestionCircle className="icon-faq"/>
                <span>FAQ</span>
                </div>
                <Image src="/next.svg" alt="next" width={20} height={20} className="profileImg" />
            </div>
        </div>
    )
}

export default Navbar