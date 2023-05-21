import { EHeaderTitle, IHeaderProps } from "./types";
import styles from './header.module.css';
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

export function Header(props: IHeaderProps ) {
const {count} = props;
const navigate = useNavigate();

    function handleheaderClick(key: string): void {
            navigate(`/dashboard`, {
                replace: true,
                state: { new: true },
              });
    
    }

    return (<div  className={styles['header']}>
  {Object.values(EHeaderTitle).map(key => <button  onClick={() =>handleheaderClick(key)}  >{key}</button>)}
    
 
    </div>)
}