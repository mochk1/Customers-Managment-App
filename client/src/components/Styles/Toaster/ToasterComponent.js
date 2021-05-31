import React, {useContext} from 'react'
import './ToasterComponent.css'
import {DataContext} from '../../context'


export default function ToasterComponent() {

    const [state] = useContext(DataContext);
    const {toaster} = state;

    return (
        <div
            id="snackbar"
            className={toaster === 'deleted' ? 'show' : ''}
            >לקוח נמחק בהצלחה
        </div>
    )
}
