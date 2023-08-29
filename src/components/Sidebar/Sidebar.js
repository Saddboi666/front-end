import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { sideBarData } from './siderData';
import styles from './sidebar.module.css';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={isOpen ? styles.sidenav : styles.sidenavClosed} >
            <button className={styles.menuBtn} onClick={toggleOpen}>
                {isOpen ? (
                    <KeyboardDoubleArrowLeftIcon />
                ) : (
                    <KeyboardDoubleArrowRightIcon />
                )}
            </button>
            {sideBarData.map((item) => {
                return (
                    <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                        {item.icon}
                        <span className={isOpen ? styles.linkText : styles.linkTextClosed}>{item.text}</span>
                    </NavLink>
                )
            })}
        </div>
    )
} 