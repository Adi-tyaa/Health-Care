import React from 'react'
import '../componentStyles/Register.css'
export default function Register() {
  return (
    
	<div className='container '>
       <div className='regiComp'>
       <p >our<br/><strong>contacts</strong></p>
       <p className='p1'> Jacksotts street 567, San Diego, California, USA</p>
       <p className='p1'> 8 (800) 923 4567, 8 (800) 923 4568</p>
       <p className='p1'>uvmedico@support.com</p>
      </div> 
    
       
	<div class="formbold-main-wrapper">
	<p >make an<br/><strong>appointment</strong></p>
  <div class="formbold-form-wrapper">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="flex flex-wrap formbold--mx-3">
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              class="formbold-form-input"
            />
          </div>
        </div>
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              class="formbold-form-input"
            />
          </div>
        </div>
      </div>

	<div class="bottommargin_10">
             <select class="selectpicker" id="time" name="time" required>
                 <option value="" disabled selected>Select Time</option>
                 <option value="8:00">8:00</option>
                 <option value="8:30">8:30</option>
                 <option value="9:00">9:00</option>
                 <option value="9:30">9:30</option>
                 <option value="10:00">10:00</option>
                 <option value="10:30">10:30</option>
                 <option value="11:00">11:00</option>
                 <option value="11:30">11:30</option>
                 <option value="12:00">12:00</option>
                 <option value="12:30">12:30</option>
                 <option value="13:00">13:00</option>
                 <option value="13:30">13:30</option>
                 <option value="14:00">14:00</option>
                 <option value="14:30">14:30</option>
                 <option value="15:00">15:00</option>
                 <option value="15:30">15:30</option>
                 <option value="16:00">16:00</option>
                 <option value="16:30">16:30</option>
                 <option value="17:00">17:00</option>
                 <option value="17:30">17:30</option>
                 <option value="18:00">18:00</option>
                 <option value="18:30">18:30</option>
                 <option value="19:00">19:00</option>
                 <option value="19:30">19:30</option>
                 <option value="20:00">20:00</option>
             </select>
         </div>




      <div class="flex flex-wrap formbold--mx-3">
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5 w-full">
            
            <input
              type="date"
              name="date"
              id="date"
              class="formbold-form-input"
            />
          </div>
        </div>
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            <label for="time" class="formbold-form-label"> Time </label>
            <input
              type="time"
              name="time"
              id="time"
              class="formbold-form-input"
            />
          </div>
        </div>
      </div>

      <div class="flex formbold-mb-5">
        <div class="flex">
          <input
            type="radio"
            name="radio1"
            id="radioButton1"
            class="formbold-radio"
          />
          <label for="radioButton1" class="formbold-radio-label"> Yes </label>
        </div>
        <div class="flex">
          <input
            type="radio"
            name="radio1"
            id="radioButton2"
            class="formbold-radio"
          />
          <label for="radioButton2" class="formbold-radio-label"> No </label>
        </div>
      </div>

      <div>
        <button class="formbold-btn">Submit</button>
      </div>
    </form>
  </div>
</div>
</div>

  )
}
