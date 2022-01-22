import React from "react";
import '../styles/Checkout.css'

export const Checkout = () => {
    return (
        <div className="checkout">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
            <div id="middle">
                <div id="mid_left">
                    <div id="mid_left1">
                        <div id="mid_left1_inside">
                            <div class="mid_left12">ORDER SUMMERY    <a href="demoCart.html"><span id="edit_cart"></span></a></div>
                            <div id="mid_left11">( <span id="count">2</span> Items)</div>
                            <button id="showitems" onclick="hide_and_seek()"><span class="material-icons-outlined">   add </span></button>
                        </div>

                        {/* <div id="order">
                            <div id="order_summary">
                                {/* <!-- <div class="inside_order">
                                        <img class="furniture" src="https://ii1.pepperfry.com/media/catalog/product/k/a/236x260/kaylee-1-seater-sofa-in-sky-blue-colour-kaylee-1-seater-sofa-in-sky-blue-colour-evw1c8.jpg" />
                                        <div>
                                            <div>Delivery By</div>
                                        </div>
                                    </div>
                                    <div class="inside_order">
                                        <img class="furniture" src="https://ii2.pepperfry.com/media/catalog/product/f/a/568x284/fabiola-2-seater-sofa-in-blue-colour-fabiola-2-seater-sofa-in-blue-colour-z4hjuj.jpg" />
                                        <div>data2</div>
                                    </div> --> 

                            </div>
                        </div> */}

                    </div>
                    <div id="mid_left2">
                        <div id="mid_left21">
                            <div class="mid_left12">SHIPPING & BILLING DETAILS</div>
                            <div id="mid_left221">Tell Us Where To Deliver</div>
                            <div id="dash_style">—</div>
                        </div>
                        <div id="mid_left22">
                            <div id="email"></div>
                            <div id="shippingAddress">
                                <p id="shipping"><strong>Add New Shipping Address</strong></p>
                                <form id="form" >
                                    <br />
                                    <div class="nme">
                                        <label class="label1">Name</label>
                                        <input type="text" id="name" placeholder="Akash" required />
                                        {/* <div id="name">Akash</div> */}
                                    </div>
                                    
                                    <div class="Spacing_between"></div>

                                        
                                    <div class="num1">
                                        <label class="label2">Moblie Number</label>
                                        <input type="number" id="moblie" placeholder="9898989898" required />
                                        {/* <div id="moblie">9898989898</div> */}
                                        <img id="question_mark" src="https://ii1.pepperfry.com//images/svg/nCheckout-question-mark.svg" alt="" />
                                        <div id="show"> </div>
                                    </div>

                                    <div id="moblie_valid"></div>
                                    
                                    <div class="Spacing_between"></div>

                                        
                                    <div class="side">
                                        <label class="label3">PinCode</label>
                                        <input type="number" id="pincode" placeholder="400059" required />
                                    </div>
                                    <div id="pin_valid"></div>
                                    
                                    <div class="Spacing_between"></div>

                                        
                                    <div class="side">
                                        <label class="label4">Address</label>
                                        <input type="text" id="address" placeholder="House Number, Building Name, Society, Area, Road, Landmark" required />
                                    </div>

                                    <div id="address_valid"></div>
                                    
                                    <div class="Spacing_between"></div>

                                        
                                    <div id="mid_left2221">
                                        <div id="city_part">
                                            <input type="text" id="city" placeholder="City" required />
                                            <div id="city_valid"></div>
                                        </div>
                                        <div id="city_part">
                                            <select id="state" required>
                                                <option>Select State</option>
                                                <option>Delhi</option>
                                                <option>Maharashtra</option>
                                                <option>Andhra Pradesh</option>
                                                <option>Arunachal Pradesh</option>
                                                <option>Assam</option>
                                                <option>Bihar</option>
                                                <option>Goa</option>
                                                <option>Haryana</option>
                                                <option>Himachal Pradesh</option>
                                                <option>Jammu and Kashmir</option>
                                                <option>Jharkhand</option>
                                                <option>Karnataka</option>
                                                <option>Kerala</option>
                                                <option>Madhya Pradesh</option>
                                                <option>Manipur</option>
                                                <option>Meghalaya</option>
                                                <option>Mizoram</option>
                                                <option>Nagaland</option>
                                                <option>Punjab</option>
                                                <option>Rajasthan</option>
                                                <option>Sikkim</option>
                                                <option>Tamil Nadu</option>
                                                <option>Tripura</option>
                                                <option>West Bengal</option>
                                                <option>Utter Pradesh</option>
                                                <option>Chandigarh</option>
                                                <option>Andaman and Nicobar Islands</option>
                                                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                                <option>Telangana</option>
                                                <option>Uttarakhand</option>
                                                <option>Gujarat</option>
                                                <option>Chhattisgarh</option>
                                                <option>Punducherry</option>
                                                <option>Odisha</option>
                                                <option>Pundicherry</option>
                                                <option>Lakshadweep</option>
                                            </select>

                                            <div id="state_valid"></div>
                                        </div>
                                    </div>
                                    
                                    <div class="Spacing_between"></div>

                                        
                                    {/* <!-- <input type="text" placeholder="India" /> --> */}
                                    <div id="country">India</div>
                                    <br />
                                    <div id="mid_left2222">
                                        <input id="same_address" class="checkbox" type="checkbox" onclick="checkbox1()" />
                                        <div class="below_checkbox">Biling Address Is The Same As Shipping Address</div>
                                    </div>
                                    <br />
                                    <div id="remove">

                                        <div id="change_billing_color"><strong>Add Biling Address</strong></div>
                                        <br/>
                                        <div class="nme1">
                                            <label class="label1">Name</label>
                                            <input type="text" id="name1" placeholder="Akash" required />
                                            {/* <div id="name1">Akash</div> */}
                                        </div>

                                        <div class="Spacing_between"></div>

                                        
                                        <div class="num11">
                                            <label class="label2">Moblie Number</label>
                                            <input type="number" id="moblie1" placeholder="9898989898" required />
                                            {/* <div id="moblie1">9898989898</div> */}
                                            <img id="question_mark1" src="https://ii1.pepperfry.com//images/svg/nCheckout-question-mark.svg" alt="" />
                                            <div id="show1"> </div>
                                        </div>

                                        <div id="moblie_valid1"></div>
                                        
                                        <div class="Spacing_between"></div>

                                        
                                        <div class="side1">
                                            <label class="label3">PinCode</label>
                                            <input type="number" id="pincode1" placeholder="400059" required />
                                        </div>
                                        <div id="pin_valid1"></div>
                                        
                                        <div class="Spacing_between"></div>

                                        
                                        <div class="side1">
                                            <label class="label4">Address</label>
                                            <input type="text" id="address1" placeholder="House Number, Building Name, Society, Area, Road, Landmark" required />
                                        </div>
                                        <div id="address_vaild1"></div>
                                        
                                        <div class="Spacing_between"></div>

                                        
                                        <div id="mid_left2221">
                                            <div id="city_part">
                                                <input type="text" id="city1" placeholder="City" required />
                                                <div id="city_valid1"></div>
                                            </div>
                                            <div id="city_part">
                                                <input type="text" id="state1" placeholder="State" />
                                                <div id="state_valid1"></div>
                                            </div>
                                        </div>
                                        
                                        <div class="Spacing_between"></div>

                                        
                                        <select id="country1" required>
                                            <option>Select Country</option>
                                            <option>Georgia</option>
                                            <option>Afghanistan</option>
                                            <option>�land Islands</option>
                                            <option>Albania</option>
                                            <option>Algeria</option>
                                            <option>American Samoa</option>
                                            <option>Andorra</option>
                                            <option>Angola</option>
                                            <option>Anguilla</option>
                                            <option>Antarctica</option>
                                            <option>Antigua and Barbuda</option>
                                            <option>Argentina</option>
                                            <option>Armenia</option>
                                            <option>Aruba</option>
                                            <option>Australia</option>
                                            <option>Azerbaijan</option>
                                            <option>Bahamas</option>
                                            <option>Bahrain</option>
                                            <option>Bangladesh</option>
                                            <option>Barbados</option>
                                            <option>Belarus</option>
                                            <option>Belize</option>
                                            <option>Benin</option>
                                            <option>Bermuda</option>
                                            <option>Bhutan</option>
                                            <option>Bolivia, Plurinational State Of</option>
                                            <option>Bosnia and Herzegovina</option>
                                            <option>Botswana</option>
                                            <option>Bouvet Island</option>
                                            <option>Brazil</option>
                                            <option>British Indian Ocean Territory</option>
                                            <option>Brunei Darussalam</option>
                                            <option>Burkina Faso</option>
                                            <option>Burundi</option>
                                            <option>Cambodia</option>
                                            <option>Cameroon</option>
                                            <option>Canada</option>
                                            <option>Cape Verde</option>
                                            <option>Cayman Islands</option>
                                            <option>Central African Republic</option>
                                            <option>Chad</option>
                                            <option>Chile</option>
                                            <option>China</option>
                                            <option>Christmas Island</option>
                                            <option>Cocos (Keeling) Islands</option>
                                            <option>Colombia</option>
                                            <option>Comoros</option>
                                            <option>Congo</option>
                                            <option>Congo, The Democratic Republic Of The</option>
                                            <option>Cook Islands</option>
                                            <option>Costa Rica</option>
                                            <option>C�te D'Ivoire</option>
                                            <option>Cuba</option>
                                            <option>Djibouti</option>
                                            <option>Dominica</option>
                                            <option>Dominican Republic</option>
                                            <option>Ecuador</option>
                                            <option>Egypt</option>
                                            <option>El Salvador</option>
                                            <option>Equatorial Guinea</option>
                                            <option>Eritrea</option>
                                            <option>Ethiopia</option>
                                            <option>Falkland Islands (Malvinas)</option>
                                            <option>Faroe Islands</option>
                                            <option>Fiji</option>
                                            <option>French Guiana</option>
                                            <option>French Polynesia</option>
                                            <option>French Southern Territories</option>
                                            <option>Gabon</option>
                                            <option>Gambia</option>
                                            <option>Ghana</option>
                                            <option>Gibraltar</option>
                                            <option>Greenland</option>
                                            <option>Grenada</option>
                                            <option>Guadeloupe</option>
                                            <option>Guam</option>
                                            <option>Guatemala</option>
                                            <option>Guernsey</option>
                                            <option>Guinea</option>
                                            <option>Guinea-Bissau</option>
                                            <option>Guyana</option>
                                            <option>Haiti</option>
                                            <option>Heard and McDonald Islands</option>
                                            <option>Holy See (Vatican City State)</option>
                                            <option>Honduras</option>
                                            <option>Hong Kong</option>
                                            <option>Iceland</option>
                                            <option>India</option>
                                            <option>Indonesia</option>
                                            <option>Iran, Islamic Republic Of</option>
                                            <option>Iraq</option>
                                            <option>Isle of Man</option>
                                            <option>Israel</option>
                                            <option>Jamaica</option>
                                            <option>Japan</option>
                                            <option>Jersey</option>
                                            <option>Jordan</option>
                                            <option>Kazakhstan</option>
                                            <option>Kenya</option>
                                            <option>Kiribati</option>
                                            <option>Korea, Republic of</option>
                                            <option>Korea, Democratic People's Republic Of</option>
                                            <option>Kuwait</option>
                                            <option>Kyrgyzstan</option>
                                            <option>Lao People's Democratic Republic</option>
                                            <option>Lebanon</option>
                                            <option>Lesotho</option>
                                            <option>Liberia</option>
                                            <option>Libyan Arab Jamahiriya</option>
                                            <option>Liechtenstein</option>
                                            <option>Macao</option>
                                            <option>Macedonia, the Former Yugoslav Republic Of</option>
                                            <option>Madagascar</option>
                                            <option>Malawi</option>
                                            <option>Malaysia</option>
                                            <option>Maldives</option>
                                            <option>Mali</option>
                                            <option>Marshall Islands</option>
                                            <option>Martinique</option>
                                            <option>Martinique</option>
                                            <option>Mauritius</option>
                                            <option>Mayotte</option>
                                            <option>Mexico</option>
                                            <option>Micronesia, Federated States Of</option>
                                            <option>Moldova, Republic of</option>
                                            <option>Monaco</option>
                                            <option>Mongolia</option>
                                            <option>Montenegro</option>
                                            <option>Montserrat</option>
                                            <option>Morocco</option>
                                            <option>Mozambique</option>
                                            <option>Myanmar</option>
                                            <option>Namibia</option>
                                            <option>Nauru</option>
                                            <option>Nepal</option>
                                            <option>Netherlands Antilles</option>
                                            <option>New Caledonia</option>
                                            <option>New Zealand</option>
                                            <option>Nicaragua</option>
                                            <option>Niger</option>
                                            <option>Nigeria</option>
                                            <option>Niue</option>
                                            <option>Norfolk Island</option>
                                            <option>Northern Mariana Islands</option>
                                            <option>Norway</option>
                                            <option>Oman</option>
                                            <option>Pakistan</option>
                                            <option>Palau</option>
                                            <option>Palestinian Territory, Occupied</option>
                                            <option>Panama</option>
                                            <option>Papua New Guinea</option>
                                            <option>Paraguay</option>
                                            <option>Peru</option>
                                            <option>Philippines</option>
                                            <option>Saint Pierre And Miquelon</option>
                                            <option>Pitcairn</option>
                                            <option>Puerto Rico</option>
                                            <option>Qatar</option>
                                            <option>R�union</option>
                                            <option>Russian Federation</option>
                                            <option>Rwanda</option>
                                            <option>Saint Helena, Ascension and Tristan Da Cunha</option>
                                            <option>Saint Kitts And Nevis</option>
                                            <option>Saint Lucia</option>
                                            <option>Saint Vincent And The Grenedines</option>
                                            <option>Samoa</option>
                                            <option>San Marino</option>
                                            <option>Sao Tome and Principe</option>
                                            <option>Saudi Arabia</option>
                                            <option>Senegal</option>
                                            <option>Serbia</option>
                                            <option>Seychelles</option>
                                            <option>Sierra Leone</option>
                                            <option>Singapore</option>
                                            <option>Solomon Islands</option>
                                            <option>Somalia</option>
                                            <option>South Africa</option>
                                            <option>South Georgia and the South Sandwich Islands</option>
                                            <option>Sri Lanka</option>
                                            <option>Sudan</option>
                                            <option>Suriname</option>
                                            <option>Svalbard And Jan Mayen</option>
                                            <option>Swaziland</option>
                                            <option>Switzerland</option>
                                            <option>Syrian Arab Republic</option>
                                            <option>Taiwan, Province Of China</option>
                                            <option>Tajikistan</option>
                                            <option>Tanzania, United Republic of</option>
                                            <option>Thailand</option>
                                            <option>Timor-Leste</option>
                                            <option>Togo</option>
                                            <option>Tokelau</option>
                                            <option>Tonga</option>
                                            <option>Trinidad and Tobago</option>
                                            <option>Tunisia</option>
                                            <option>Turkey</option>
                                            <option>Turkmenistan</option>
                                            <option>Turks and Caicos Islands</option>
                                            <option>Tuvalu</option>
                                            <option>Uganda</option>
                                            <option>Ukraine</option>
                                            <option>United Arab Emirates</option>
                                            <option>United Kingdom</option>
                                            <option>United States</option>
                                            <option>United States Minor Outlying Islands</option>
                                            <option>Uruguay</option>
                                            <option>Uzbekistan</option>
                                            <option>Vanuatu</option>
                                            <option>Venezuela, Bolivarian Republic of</option>
                                            <option>Viet Nam</option>
                                            <option>Virgin Islands, British</option>
                                            <option>Virgin Islands, U.S.</option>
                                            <option>Wallis and Futuna</option>
                                            <option>Western Sahara</option>
                                            <option>Yemen</option>
                                            <option>Zambia</option>
                                            <option>Zimbabwe</option>
                                            <option>Saint Barth�lemy</option>
                                            <option>Saint Martin</option>
                                            <option>Bonaire, Sint Eustatius and Saba</option>
                                            <option>Cura�ao</option>
                                            <option>Sint Maarten (Dutch part)</option>
                                            <option>South Sudan</option>
                                        </select>
                                        <div id="country_valid1"></div>
                                    </div>
                                    {/* <!-- <div id="mid_left2223">
                                                                            <input class="checkbox" type="checkbox" />
                                                                            <div class="below_checkbox">I Want To Sign Up</div>
                                                                        </div>
                                                                        <br/> -->
                                                                            <!-- <input type="submit" id="submit" name="submit" value="SAVE & CONTINUE" /> --> */}
                                </form>
                                
                                <div class="Spacing_between"></div>

                                        
                                <a href="payment.html"><button id="submit" onclick="verify()">SAVE & CONTINUE</button></a>
                                <br /><br />
                                <div id="mid_left3">
                                    <div id="mid_left31">PAYMENT</div>
                                    <div id="mid_left32">How Would You Like To Pay</div>
                                    <div id="PaymentMethod">+</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="right">
                    <div id="mid_right">
                        <div class="right_in">
                            <div>Cart Value</div>
                            <div class="right_in1">₹ <span id="cart_val">3601</span></div>
                        </div>
                        <div class="right_in" id="retail">
                            <div>Retail Discount</div>
                            <div class="right_in1">(-) ₹ <span id="retail_val">11720</span></div>
                        </div>
                        <div class="right_in">
                            <div>Delivery<span id="free_color">(FREE)</span></div>
                            <div class="right_in1">₹ <span id="delivery">0</span></div>
                        </div>
                        <div class="right_in">
                            <div>Assembly</div>
                            <div class="right_in1"><span>₹ <span id="assembly_val">449</span></span></div>
                        </div>
                        <div class="right_in" id="give_india">
                            <div>GiveIndia</div>
                            <div class="right_in1">₹ <span id="give_val">99</span></div>
                        </div>
                        <hr />
                        <div class="right_in" id="total_font">
                            <div>Total</div>
                            <div id="total_value" class="right_in1" >₹ <span id="total_val">25326</span></div>
                        </div>
                        <div class="right_in1" id="tax"><strong>(inclusive of all taxes)</strong></div>
                        <div class="right_in1" id="more">˄</div>
                    </div>
                    <div class="right_below1" id="">No Cost EMI Available starting <span><a href="">₹
                        4,221/month</a></span>. EMI Starting <span><a href="">₹ 1,193/month</a></span>
                    </div>
                    <div class="right_below2" id="right_checkbox">
                        <input id="rgt_checkbox" type="checkbox" />
                        <div id="right_last">Contribute Rs.99 For COVID Relief Through GiveIndia.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}