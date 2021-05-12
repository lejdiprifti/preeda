import React from "react";
import './MainBodyComponent.css';
import { FolderComponent } from "../folder/FolderComponent";
export const MainBodyComponent: React.FC = (): JSX.Element => {
    return (
        <div id="mainBodyContainer">
            <div className="imageContainer">
                <img className="addressImg" src='address.png' alt="address" />
            </div>
            <div className="folderContainer">
                <FolderComponent folderName='Drinks' onClick={() => { console.log('clicked drinks') }}>
                    <img className="folderImage" draggable="false" src='GenericFolder.png' alt='Folder' />
                </FolderComponent>
                <FolderComponent folderName='Food' onClick={() => { console.log('clicked drinks') }}>
                    <img className="folderImage" draggable="false" src='GenericFolder.png' alt='Folder' />
                </FolderComponent>
                <FolderComponent folderName='Tables' onClick={() => { console.log('clicked drinks') }}>
                    <img className="folderImage" draggable="false" src='GenericFolder.png' alt='Folder' />
                </FolderComponent>
                <FolderComponent folderName='Trash' onClick={() => { document.getElementById('root')!.innerHTML = '' }}>
                    <img className="folderImage" draggable="false" src='TrashIcon.png' alt='Trash' />
                </FolderComponent>
                <FolderComponent folderName='Finder' onClick={() => { document.getElementById('root')!.innerHTML = '' }}>
                    <img className="folderImage" draggable="false" src='FinderIcon.png' alt='Finder' />
                </FolderComponent>
            </div>
        </div>
    )
}