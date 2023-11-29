import React from 'react'
import style from './style.module.scss'
import { Button } from './button.style'
export const Navbar_1 = () => {
    return (

        <div className={style.imageBox}>
            <div className={style.container}>

                <div className={style.text}>
                    <h1>
                        <span className={style.span}>Бросай курить</span>
                        Положительное влияние на ваше здоровье в результате отказа от табака будет ощущаться уже в первые часы.
                        Обоняние и вкусовые ощущения восстановятся, улучшится кровяное давление, физические способности и дыхание.
                        Через год риск появления сердечных заболеваний уменьшится вдвое,
                        также с каждым годом начнет снижаться риск развития рака.
                    </h1>
                </div>
                <div className={style.mainText}>
                    <div className={style.innerText}>
                        <p>Для отказа от табака и никотина имеется, как минимум, 25 причин.
                            , в свою очередь, более вероятен если у вас есть настоящее желание это сделать.
                            Для начала можете проверить степень своей никотиновой зависимости.
                            А для того, чтобы начать отказ от курения, воспользуйтесь нашим 2-х недельным планом по отказу.
                            У многих за спиной есть множество неудачных попыток бросить. Наш опыт показывает,
                            что с помощью профессионального консультанта отказ удается гораздо успешнее.</p>
                    </div>
                </div>
                <div className={style.buttonsBox}>
                    <a href='https://www.facebook.com/'><Button color="red">Поделиться Facebook</Button></a>
                    <a href='https://www.whatsapp.com/android'><Button color="green">Поделиться Whatsapp</Button></a>
                    <a href='https://www.instagram.com/'><Button color="pink">Поделиться Instagram</Button></a>


                </div>
            </div>
        </div>



    )
}

