import React from 'react';
import diagram from '../img/diagramTest.png'
import Task from './Task';



function Body() {

    //Тест бд
    const tasks = [
            {
                taskName : 'wake up',
                taskDescription : 'aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa ',
                done: false,
            },
        
            {
                taskName : 'clean yourself',
                taskDescription : 'you know exactly how to',
                done: false,
            },
        
            {
                taskName : 'work for food',
                taskDescription : 'imagine yourself working as junior',
                done: false,
            },

            {
                taskName : 'find something to eat',
                taskDescription : 'remember your pre-historic hunter legacy',
                done: false,
            },

            {
                taskName : 'sleep well',
                taskDescription : 'turn over the dry side of the pillow',
                done: false,
            },
    ]
          
    return(
        <body>{/*Основной контейнер flexbox*/}
            <div className='mainContent'>


                <div className='taskAndPercent'>
                    <div className='list'>
                        <Task 
                            taskName = {tasks[0].taskName} 
                            taskDescription = {tasks[0].taskDescription}
                        />
                        <Task 
                            taskName = {tasks[1].taskName} 
                            taskDescription = {tasks[1].taskDescription}
                        />
                        <Task 
                            taskName = {tasks[2].taskName} 
                            taskDescription = {tasks[2].taskDescription}
                        />
                        <Task 
                            taskName = {tasks[3].taskName} 
                            taskDescription = {tasks[3].taskDescription}
                        />
                        <Task 
                            taskName = {tasks[4].taskName} 
                            taskDescription = {tasks[4].taskDescription}
                        />
                    </div>

                    <div className='centerContent'>
                        <h1>It's good you're here</h1>
                        <h3>Let's see what we have to do...</h3>
                        <img src={diagram} height={500} alt='diagram' />
                        <h3 className='commonWord'>You're doing nice!</h3>
                    </div>

                    <div className='list'>
                        <Task 
                            taskName = {tasks[0].taskName} 
                            taskDescription = {tasks[0].taskDescription}
                        />
                        <Task 
                            taskName = {tasks[1].taskName} 
                            taskDescription = {tasks[1].taskDescription}
                        />
                        <Task 
                            taskName = {tasks[2].taskName} 
                            taskDescription = {tasks[2].taskDescription}
                        />
                        <Task 
                            taskName = {tasks[3].taskName} 
                            taskDescription = {tasks[3].taskDescription}
                        />
                        <Task 
                            taskName = {tasks[4].taskName} 
                            taskDescription = {tasks[4].taskDescription}
                        />
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Body