import React from "react";
import './MainView.css';
import { FolderComponent } from "../../components/folder/FolderComponent";
export const MainView: React.FC = (): JSX.Element => {
    return (
        <div id="mainBodyContainer">
            <div className="imageContainer">
                <img className="addressImg" src='address.png' alt="address" />
            </div>
            <div className="folderContainer">
                <FolderComponent defaultPosition={{ x: 20, y: -23 }} folderName='Drinks' onClick={() => { console.log('clicked drinks') }}>
                    <img className="folderImage" draggable="false" src='GenericFolder.png' alt='Folder' />
                </FolderComponent>
                <FolderComponent defaultPosition={{ x: -97, y: -80 }} folderName='Food' onClick={() => { console.log('clicked drinks') }}>
                    <img className="folderImage" draggable="false" src='GenericFolder.png' alt='Folder' />
                </FolderComponent>
                <FolderComponent defaultPosition={{ x: -50, y: 56 }} folderName='Tables' onClick={() => { console.log('clicked drinks') }}>
                    <img className="folderImage" draggable="false" src='GenericFolder.png' alt='Folder' />
                </FolderComponent>
                <FolderComponent defaultPosition={{ x: 100, y: -70 }} folderName='Trash' onClick={() => { document.getElementById('root')!.innerHTML = '' }}>
                    <img className="folderImage" draggable="false" src='TrashIcon.png' alt='Trash' />
                </FolderComponent>
                <FolderComponent defaultPosition={{ x: -140, y: 10 }} folderName='Finder' onClick={() => { }}>
                    <img className="folderImage" draggable="false" src='FinderIcon.png' alt='Finder' />
                </FolderComponent>
            </div>
        </div>
    )
}