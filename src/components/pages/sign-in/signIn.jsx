import React from 'react'
import style from './style.module.scss'
import styled from 'styled-components'

export const SignIn = () => {
  const Button = styled.button`
  padding: 10px;
  background-color:rgb(0, 106, 255);
  font-size: 20px;
  font-weight:bold;
  color:#fff;
  border-radius: 25px;
  margin-top:10px;
  `
  return (
    <div className={style['center']}>
      <form className={style['sign']}>
        <div className={style['forms-item']}>
          <label className={style['inputs-label']}>Username</label>
          <input type="text" placeholder="Write your Username..." className={style['forms-input']} />
        </div>
        <div className={style['forms-item']}>
          <label className={style['inputs-label']}>Password</label>
          <input type="password" placeholder="Write your password..." className={style['forms-input']} />
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <Button className={style['sign_in_button']}>Sign In</Button>
        </div>
      </form>
    </div>
  )
}
