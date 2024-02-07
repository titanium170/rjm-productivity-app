'use client'

import { FormEvent, useRef } from 'react';
import { createQuest } from '@/app/rpg/actions';

export default function AddQuest() {
    const addQuestDialog = useRef<HTMLDialogElement>(null);



   const showAddQuest = () => {
        console.log('button clicked')
        addQuestDialog.current!.showModal();
   } 

//    const handleSubmit = (event: FormEvent) => {
//         event.preventDefault();

//         const formData = new FormData(event.target as HTMLFormElement);

//         formData.forEach((value, key) => {

//         });

//    }



    return (
        <>
            <dialog ref={addQuestDialog}>
                <h2>Add a new quest</h2>
                <form action={createQuest}>
                   <label htmlFor="quest-title">Quest title</label> 
                   <input type="text" name="questTitle" id="quest-title" />
                <label htmlFor="quest-objective">Quest objective</label> 
                   <input type="text" name="questObj" id="quest-objective" />
                   <button>Add quest</button>
                </form>

            </dialog>
            <button onClick={showAddQuest}>Add Quest</button> 
        </>
    )
}
