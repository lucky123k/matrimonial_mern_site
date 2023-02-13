import React from 'react'
import "./css/Matches.css"
const Matchcard = ({topic}) => {
    return (
        <div>
            <section class="wrapper">
                <div class="card" data-effect="zoom">
                    <button class="card__save  js-save" type="button">
                        <i class="fa  fa-bookmark"></i>
                    </button>
                    <figure class="card__image">
                        <img src="http://www.cordalisphotography.com/Images/jpegs/wedding_dark.jpg" />
                    </figure>
                    <div class="card__header">
                        <figure class="card__profile">
                            <img src="https://avatarfiles.alphacoders.com/240/thumb-1920-240543.png" />
                        </figure>
                    </div>
                    <div class="card__body">
                        <h3 class="card__name">{topic.name}</h3>
                        {/* <p class="card__job">{}</p> */}
                        <p class="card__bio">{`${topic.name} lives in ${topic.state} is ${topic.age} years of age. Hope you find your ideal match with ${topic.name}`}</p>
                    </div>
                    <div class="card__footer">
                        <p class="card__date">{`Address is ${topic.state}`}</p>
                        <p class="card__contact">{`Contact Info  ${topic.contact}`}</p>

                        {/* <p>heeeeeeeeelllllllllllllllllllllllll</p> */}
                    </div>
                </div>
                {/* <!-- END: card --> */}

            </section>
        </div>
    )
}

export default Matchcard