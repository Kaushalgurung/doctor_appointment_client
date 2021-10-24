import {Button, FormControl, FormGroup} from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
export default function Home(){
    return(
        <div>
            <div>
  {/* Authour: Kaushal Gurung | https://github.com/Kaushalgurung  */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <meta name="description" content="Sgenerix is a leading growth partner for many pharmaceuticals, diagnostics, and medical devices. We have successfully been leading as one of the top Importers and Distributors of Nepal. Sgenerix, inspired by service motive and motto ”We care for you” , is a representation for making most of the life-saving, prominent, and crucial entity medicines available in the country." />
  <meta name="keywords" content="OM Shanti Chock, pharmaceuticals,Sgenerix,pharmaceutical industry, WE CARE, pharma ,pharma distributors, Sgenerix Pharma Distributors" />
  <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles-index.css" />
  <link rel="shortcut icon" type="image/svg+xml" href="images/sg.png" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />   
  <title>Care-U</title>
   <div className="navigation__nav">
    <div className="navigation__logo-wrap">
      <a href="#home" className="navigation__logo" title="Care-u">
        <img src="images/sg.png" alt="Care-u Logo" className="navigation__small-logo" />
      </a>
    </div>
    <ul className="navigation__list">
      <li className="navigation__item"><a data-scroll href="#about-us" className="navigation__link" title="About us">About us</a></li>
      <li className="navigation__item"><a data-scroll href="/doctors" className="navigation__link">List Doctors</a></li>
      <li className="navigation__item"><a data-scroll href="#contact" className="navigation__link" title="Contact us">Contact Us</a></li>
    </ul>
  </div>
  <header className="header" id="home">
    <div className="header__logo-box">
      <span><img src="images/logo.png" alt="Care-u Logo" className="navigation__small-logo" /></span>
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main" style={{color: 'black'}}>Connect with renowned doctors with ease.</span>
      </h1>
      <h4 className="heading-secondary">
        <span className="heading-secondary--main" style={{color: 'black'}}>Doctors on request.</span>
      </h4>
      <h4 className="heading-secondary">
        <span className="heading-secondary--main" style={{color: 'black'}}>Consult with doctor without leaving your home.</span>
      </h4>
      <Button variant="secondary"  size="lg" type="connect" style={{color: 'black'}}>
    Connect
  </Button>
    </div>
    <h5 className="header__description">
      <span className="heading-quaternary u-uppercase u-semi-bold-font" style={{color: 'black'}}>Contact</span>
      <span className="heading-quaternary u-semi-bold-font" style={{color: 'black'}}>marketingsgenerix@gmail.com</span>
      <span className="heading-quaternary u-semi-bold-font" style={{color: 'black'}}>+977 980-2067468</span>
    </h5>
  </header>
  <main>
    <section className="section-features our associates" id="associates">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Our Associates
        </h2>
      </div>
      <section className="section-features application-mgmt-practices">
        <div className="u-center-text u-margin-bottom-big">
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <div className="feature-box">
              <span><img src="data:image/jpeg;base64,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" /></span>
              <h3 className="heading-tertiary u-margin-bottom-small">Lupin Limited</h3>
              <p className="feature-box__text">
                Lupin Limited is an Indian multinational pharmaceutical company based in Mumbai, Maharashtra, India. It is one of the largest generic pharmaceutical companies by revenue globally. The company's key focus areas include paediatrics, cardiovascular, anti-infectives, diabetology, asthma and anti-tuberculosis.
              </p>
              <a href="https://www.lupin.com/" className="btn">Visit site</a>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="feature-box">
              <span><img src="images/sg.png" /></span>
              <h3 className="heading-tertiary u-margin-bottom-small">OUR ASSOCIATES</h3>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="feature-box">
              <span><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgUFRUZGBUaGxUdGxgZHBkiFB4ZIBkeHhwbHBsgIC0mICUpJRscJTglLDIyQTc3GyQ7Pzk1Pi4yNDIBCwsLEA8QHRISGzIiJCkwNTIwODIyMjc8MDg+MjIyNDA4MjAyMjAwOD4wMjswMDA+NjU+Mjc0NjIyMjIyMjAyMv/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcECAEDBQL/xABEEAACAQICBgYHBQcCBgMAAAABAgMAEQQFBgcSITFBEyJRYXGBFDJCUmKRoXKCkrHBI0NTorLC0dLwFSQzNXPhFmOz/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAKhEBAAICAQMDAQkBAAAAAAAAAAECAxEEEiExQVFxoRMkMkJSYYHh8CP/2gAMAwEAAhEDEQA/ALmpSlApSlApSlApSlApSlApXF65oFK4pQc0pSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpWPisSkaNJI6oii7MxAUDtJPCgyKwMxzOHDp0k0qRp2uwF/Dt8BVYaU62N7R4FRYbuncbvFEP5t8qieWaL5jmknTNtlT+/nLBbfBzI+yLVNrpP8AN9bmGTq4eJ5j7zdSP6gsflUNx+tTMJDaMxxdgRNpvm9/yqbZJqnwkYDYh3nfs9SP8K7z5mptl+TYeAAQwxxge4ig+Z4mgolMZneI3q2NfvQOi/QKKJo9nT3OxiuO/alIN/OSthqWpo216GV55Hey40W47MjkfRzfyp/8tzjCn9pJMtuInjuPm6/rWw1fDKCLEXHZypo2pnK9cEy7p4EkX3oyUb5HaB8N1TvJNYOBxJCiXo3PBJRsknsDX2T5GsrNdCsDiAekwyBveQbD/NLX86gGf6oXALYOXbH8OWwbwDjd8wPGh2XEDXNa85fpFmWUyCFw4UfuZrmMjtjbkO9Tbuq2dFNOcNjhsqejmtvicjaP2G4MPr3VUS2lKUClKUClKUClKUClKUClK8nP86iweHeeU2VeCi20zHgqjmT/AJNBxpDnsODhM0zWUblUeu7clUX3mqMzvPsZm+JWJEYqT1MOvqL8Tnme1m3DlaviRsZnWP3DeeAueihjvz7vqxq7dFdF4MDFsRC7NYvIw67nv7B2LyqKjWiOrOHDhZMUFnm47JF4UPcp9c97eQqwwLV9UqoUpSgUpSgUpSgUpSgwM1yqHExmKeNZEPJhwPaDxB7xVN6Y6t5cKTPgy8kSnaKi/Tx233BHrAdo3j61edcEUFT6A6ydsphsa3WNlSc2AY8lk7Dy2ufPtq2aqrWLq8EgbF4NAJACZIVG5+1kA9vtHtePHF1YadEFMFimuCbRSsd4PKNyfkp8uyoLfpSlUKUpQKUpQKUpQdUkgVSzEBQCSTwAHEk1r9phn0ua41Y4QWjDbECe8TxkPja/co8am+uDSTooRg4268ovJbiIgdw7ts7vBT218an9GBHGcdIvXkBWIG3Vj5t4sfoO+oqX6G6Mx4DDiNbNI1jJJbezf6RwA/zUjpSqhSlKBSlKBSlKBSlKBXw7AC5NgOdYuYY6OCNpJXVEXeWY7v8A2T2VSWmunsuLLRRXjw1yLe3J3v2D4fnetcWK157CW6TayD0gw2XqJZGYKJCLptE2Cxj2jfdc7vGp3kkEyQKs8nSTWu7WUDaO8hQANw4DwqqtT+RiSeTFuLrFZY78Nth1m8l3ffq5queK1npj08jmqd1r6GhNrHwLYE3mQcj/ABF8/W+fbVxV0zRhlKsAVIIIPAgixBrEQbVhpccXAYJmviIgLk8ZE4B/EcG8jzqf1r1neCkyfNFeK+wDtx34NE25o2t2b1+Rq+suxqTRJKhujqrKe4i9Bl0pSgUpSgV1SyBVLMbKoJJPIAXJrtqGa1Mz6HLJADZpSsQ7bN6/8gagqNQ+bZtvuBM/4YF/wg+ZrYnDwqiKigKqgKoHAKBYD5Cqm1I5Vcz4th2RJ9Hf+wVb9SFkpSuqWQKCSQAASSTYAdpNVHZXANVXpdrOC3iwVmPAzkdUfYU8ftHd2A1CdG9L8RhMSZttpA5/ao7E7ffc8GHI+XCvRXi3tXZpf+Y4+OCJpZWCIguzHgP8nu7668pzeDEp0kEiyLz2TvB7GHFT3GqQ080xbHSBE2lwyb1U7mZrb3cfQDlv7ajeExc2Hfbjd4ntxUsrbJ/MVpXiTNdzOpXS/E0pSTMhgY7NsJI0jcgy7NkHfv3/AC7ak9a+6tpyuZxWNmZZlBPDaZGIv27xUgzHWdjopHhfDwrIjFWvtkXHMDa4c71zk409XTX2FxVENJ9PMLhAUB6aYfu0PA/G/Bfz7qqPN9NcdiQVedlQ+zGNhbdhtvPmajtaY+H62k09nSLSTEY19uZ+qCdiNf8App4Dt7zvrxqUr3RWKxqFX7quwgjyuI83MjnzYgfyqtTCotq3kDZXh7clZT4q7D9KlNfGyfjn5cuaUpXAg+tPIfScCzqLywXkXtKW66/IX8VFeHqVzvbikwbHfGekj+wx6w8m3/fq0HUEEEXB4jlaqByi+W58I72RZjGb8Oik3KfkyH7tRWwNRvPdIhFisNg0IM0zrtD3Yhcsx722SB5106Z6Xx4GO2552B2I7/zP2KPry7q51bdJis3OIlYsyK7ux94jo1Hd624fDW9MO6zafEIvGlKViOKp/XhjevhoOwSSHzsi/k1XBVCa4JdvMyl/UhjXhzO0391WKzadQsLQ1aYHosrw4tYupkbxdiw+hUeVSuqpwetSCKCONMNIxRI03sir1UA3bz2V4ub60cXKCsKrApvvHXkt9ptw+VbV42SfTSLV0h0lw+DTamksSDsou+Rvsr+psKpXS3TafGkof2cF90Snj2F29o93Co3iMQ8jl5HZ3beWcksfEmuuvbi41ad57yr1dGMq9KxkMB9V369uOwo2m+gNWtp/oRDLC+Ii2YpY1LE2sjoi8HFuIAsG+d6hmqGINmVzxWKQjxui/kTVm6xpCuVYkjmqjyZ1U/Q1jnvaMsRE6/sUjolhFmx+GjcXRpE2geYHWI89m1XDrOyuKTLpZWUbcShkaw2h1hdb9hvwqpNCJAuZ4Unh0qj8QKj6mrx03w5ky3FKOPROd3wja/SryLTGSv8AvUa/5LjugxUM3uSIx+yG630vV16aaFRY9RLGwScKAr+w68le30Ybx38KoY1sFq5zf0jLoyTd4x0b+KbgfNdk+ddcrqrq9fQVBjNB8wjbZOFd/iSzqfMH86z8s1bY+VhtxrCvNnYX8lS5/Kr7rqkkCqWYgAAkkmwAHEk8qwnmX14g2rPOdCsPgcrxLreSfo7dK4FwGZQQi8EuN3b31UlWjp3rChlhkwuHTpFcbLStuj+4OLfaNhu51VterjRbpmbeZFv6nc1X0aWB2AKSbQuQOq4/1KfmKsf0uP8AiL+IVrHleDE08cTOEDuqbTC6qW3C48bVZEWp4262LUH4Yt39dYZ8VItuba3+wtnaHbXy0qqLlgB2ki1VPLqjlv1cYpHxIwP0esSXVNi7G08LdgO2L/Q2rKMeP9f0RZWY6WYKAftMTGD7qttP+FLmqS09ziHGY3p4FZV2EUlgAWZSbMBy3W49le6uqXG/xMOB3NJ/orx9LtC5cviSSSRH23KWQMLdUsDv8CK0pXDXvNtqjs80krl3ZndzvJJZ2Y8PE1eerbRhsHhi0otPKQzj3VHqp4i5J7z3VharchwwwcWLEYadw207bypDstlv6vDlVg1xn5HVHTXwOaUpXmRxWv2tb/u8n2YP6BWwNUDrgiKZmzb+tFEw8gy7vw0WHo6V6tZomMmFBmiO/YH/AFk7re2O8b+6oFNGyMVdSjDirgqw8jW0WBl24o3vfaRTftuoNcYjAxyW6SNHtw2lB/MV68fMtWNTGzbWvJ8mnxThII2c8yPUXvd+CisrSrI/Q8QIC+2wRGdgLLtNe4XuFuf04VsbBAiLsoqqo4BQAPkKp3XPhSuLhl9loit+V0Y/o4rXHyZvk14g28rVZiujzOME2EiSJ57O0Bw7Uq2tP8OZMsxKgXPRlvwEP/bVAZVjjBPHMvFHR/IHePlcVs1ZJYveR18irD/BrjlxrJFhq/hsQY5EkXijI48VYN+lbPIyTQg8UkS/irL/AINaz5ngWgnkhf1kdkPkdx8xY+dXbqszYTZekZPXhJjPbs8UP4Tb7prrl13WLwSpDMsG0M0kLesjsh+6bX+W+prqjzrocWcOx6k4sOwSKLr8xtD5V2638m6PFJiVHUmFm7OkQfqtvwmoBBMyOrobOjKynsZTcH51vGsuP5gbUGqU010nlzHEDBYQFotrZAXjKw4sT7g4jlu2jyqS6YaXBsmSWM7L4oBN3Fdx6UeVmXzFfOqHIFjw5xjqNuW4T4Y1Nt32iCfACvFjrFIm9o7+IHbotqzhiCy4q00u47H7lT2W9vxO7uqC6ydHvRMYWRbQzXZbDqq3tqPA7/Bqv6o9pno+uNwrxbhIOtGx5OOHkeB8amPkWi/VMjXQEjeDY8iOIPI1srotmfpODhn5ui7X2x1X/mBrWySNlYqwKspIIPEEbiDVw6l8cWw00J/dyBh4Ov8AlT869XMrukW9iVlUpSvmoVWmu0D0KHfv6cWFuPUe++rLqrteEtsNhk5tKx8lQjh96gkOqr/tMHjL/wDq9TConqyh2Mpww371dt/xOzfrUsoFKUoOKprXhg7T4ea25kkjJ71baH0c1ctQTW9lvS5azgXaF0k79n1H+jX+7UkezoDjOlyzCve5EaofFOof6akdVdqTzPaw82GJ3xuHUfA43/zKfxVaNUcVDtZuSnE4BmQXkiPSL2kAddR4rfzAqY1wRVpaa2iYGqd6vrVdmvTZcik3eEmM9thvT+UgeVVTp7kPoeNdFFo3/aR9myx3r903HhapDqazHYxUsBO6RNoD40P+lj+GvpciIvi6o+VdWuHK+jxiTgdWZN/247A/ylPlWLqozfoceIiepOuwezbXrIf6h96p7rby/pMuMgHWhdX+6Tst/UD5VSOExLRyJIu5o2Vx4qb/AKVzi/6YemfgbB6f5T6Tl8qAXdB0ifaTfbzG0v3q13BraiGUOisODAEeBF61o0hwPQYueHkkjgfZvdfoRXPCt5qQxpca5gWEnqI8jqOxmVQ39I+ZrZTIoVTCwKttlY4wCOBGwN/61rhl2WyT9J0a7RjjaRgBvKqQGt39a/lVxasNKEnwyYZ2tPEoUA+3GPVZe2wsD4X51eZXcdvTySn9KUr56KQ1uZIIcUuIQWScHa/8i2ufvLY+INZmpRz6RiF5GOM+YY2/M16eujFp0EEN7yFzIBzCKpUnzLD5Gu/U3lZTDSYhhbpnAS/NEuL+bFvlXum/3fv8KsmlKV4UKpXXfjdrEwQg32I3cjvdrD6JV1VQOKb/AIlpBYdaMzKu7h0UXE+ewfxVJWF1aO4PocJBFaxSKJT4hBf63r1KUqoUpSgVjY3CrLG0Ti6urKw7mFj+dZNKDXjRfFvleb9HKbKrtDIeRRj1X8PUfwrYaqj1z6Pepjo13WEctuz2HP8AT5rUk1X6S+l4QRObzwBUa/Fk9h/kLHvHfUE5pSlUV9rgy4PgVmt1oXXf8D9Rh89k+VVvq8lK5phiObsp8GjYGrO1tZkseXmK425nVQOeypDsfoB94VB9UmVNJjunt1IVYk8ttxsqvyLHyFe7FbWCdquHPMF0+FmhI9eN18ypt9bVrE3A342N/Gtrq1+wOismJzOXDqp6JJ5BI49VUDnde3rEbgK54t4rFt/JC8MgH/KYf/ww/wBC1SOtGMLmktvaWJj4lAP0q+1UKABYACw7ABVZYbRM5hmMuNnUrhdtejU7jKEAUNY8EOze/tX3bt9Z4LxS02n2RlaotHzFA2LkFnmACA8ohvv947/ACsPSzV9IsvpeXHYcHaMQOywb3om5X90+XZVoIgAAAsBuAHACvuuPt7dU2j1FQYXWZjMN+zxuFLMN20bxufEEFT5Wr6xetqWQbGGwoDncCzFzfuRAL/OrZeNWFiAR2EXFfMGHRBZEVR8IA/KuvtMfnp+op3JNB8Zjp/SceXRCQW290zj3FX92v+wKuLDQLGioihUUAKo4ADcAK7qVnkyTfyOaUpXAjWnmd+h4CSQH9ow6OPfv233A+Qu33agupPJd8uMYbgOiQnt3M7f0j5142sHOXzHMI8Jh+siPsR29VpTud7+6OF+xSedXLkOVJhcNHh09VFAv2txZvM3PnUV6dKUqoUpSgUpSgxMfg0mjeKRdpHUqyngQaoHERT5JmQK9YLvUncssDHeD38j2ML1sRUc0y0Zjx+HMbdWRbmOS29Xtz+E8CP8AFFYb6XN0S4mHDPicMwB2oWBmQ+0rxHfcb+BPDlXiYrW1CoITCzF+StsqPPeT9Kg2jmeYnJ8W0MyN0ZYdLF+UiHttz4MN3hemXYyLERpNEyujC6sP93BHC3Ku6Wr+aN/yKd/4TmOcYgSyoYohuDMrKirfgine57+fbVt5BksWDgWCIdUbyx9ZmPFmPaf0Ar1bVzVvlm0a8R7I5rpihVb7KhbksbAC7HiT2nvrupWY+GW+419AVzSgUpSgUpSgUpSgVXmtDTD0WL0aFv8AmJV3kHfHGfa7mO8DzPZXp6daZx4GMquy+JI6kV+HxSW3he7n9RXugmiUmYTnG4zaaHaLEtxme/AfAOfhsjnUHv6otEzEnp0q2eRbRKRvWM8X8W5fD41adfCqALDcK+6oUpSgUpSgUpSgUpSgi2mWiUOYRWbqTL6koFyvwsPaU9nmKqLL8xx2SYoxunVbe0bH9lIvvo3b8Q8COVbDV5edZJBi4zFOgdTwPtKe1W4qaDC0Y0sw2Oj2ons4HWiawlXy5j4huqQ1ROkervF4J+nwbPIim6tHcYmPxC+t4r2cKy9Hda8sdo8YnSqN3SJZZR9pODH8JqLpddK8DJdLMFiwOhnQt7jHZkH3G3/Kveqo5pSlApSlApXTNKqKWZgqjiWICjzNQvPdZuBgusbHESD2Y/Uv3ud3yvQTgm1VrpprNjhDQ4MrJLvBk4wp4e+3dw8eFQvHaQ5nm7mGJWEZO+OK4jA/+yQ8fMgd1TnQ/VjFhyJcURNKLELb9ih5bj65Had3dUVFtDdBJsbJ6Zji4iYhrPfpZvHmqd/McN2+rqhhVFCooVVAAVQAABwAHIV3UqoUpSgUpSgUpSgUpSgUpSgUpSgVHM/0MwWLu0sQEn8ROrL5sPW+9epHSgpbN9UMykthpkcDeFkGy/4hdT9K8nos9wO4elBF909LH/eBV/1xappdqHh1p5jHulETH442U/QrWWuuLE23wQE9u0/+aumWFWFmUMO8A/nWG2S4Ym5w8JJ4kxpf8qIqCTXFiz6sOHHiXb+4ViHTjOMTui29/KCC/wDMQ351d0OWwp6kUa779VFG/t3CswCiqGj0HzfGsGxBYD3sTKTb7g2iPkKl2R6pcPHZsTI07e4vUi8wDtN8xVmUpo2xcDgo4UEcUaRqOCooVfkKyqUqoUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSg//Z" /></span>
              <h3 className="heading-tertiary u-margin-bottom-small">MJ Biopharm Private Limited</h3>
              <p className="feature-box__text">
                The MJ Group's flagship company, MJ Biopharm Pvt. Ltd., established to facilitate Quality Healthcare in the domestic &amp; export markets through its highly specialized range of pharmaceutical products &amp; formulations. The company excels in animal &amp; human rDNA Insulin, as well as other dosage forms such as tablets, capsules, cephalosporin injectables, other injectable ampoules &amp; vials, in a variety of specialty segments including Diabetology, Cardiology, NSAID, Anti-inflammatory, Anti-biotics, &amp; others. 
              </p>
              <a href="https://mjgroup.co.in/" className="btn">Visit site</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <div className="feature-box">
              <span><img src="data:image/jpeg;base64,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" /></span>
              <h3 className="heading-tertiary u-margin-bottom-small" title="Flamingo Health">Flamingo Health</h3>
              <p className="feature-box__text">
                Flamingo, a consumer healthcare brand offering pain management solutions &amp; products for personal protection. 
              </p>
              <a href="https://www.flamingohealth.com/" className="btn">Visit site</a>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="feature-box">
              <span><img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0003/5498/brand.gif?itok=zzFcczT7" /></span>
              <h3 className="heading-tertiary u-margin-bottom-small">Micro Life</h3>
              <p className="feature-box__text">
                Microlife, one of the world leaders in the development &amp; manufacturing of medical diagnostic equipment for home monitoring &amp; institutional use.
              </p>
              <a href="https://www.microlife.com/" className="btn">Visit site</a>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="feature-box">
              <span><img src="https://companycontactinformation.com/wp-content/uploads/2020/12/HMD-LIMITED.png" /></span>
              <h3 className="heading-tertiary u-margin-bottom-small">Hindustan Syringes &amp; Medical Devices Ltd.</h3>
              <p className="feature-box__text">
                HMD-Ltd. is a manufacturer and distributor of high-quality medical devices  for use in hospitals &amp; healthcare facilities worldwide. 
              </p>
              <a href="https://hmdhealthcare.com/" className="btn">Visit site</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-features application-mgmt-practices">
        <div className="u-center-text u-margin-bottom-big">
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <div className="feature-box">
              <span><img src="https://www.healthtechglobal.com/images/suppliers-data/pictures/companies/9/InterSurgicalLogo-1535446573.jpg" /></span>
              <h3 className="heading-tertiary u-margin-bottom-small">Intersurgical</h3>
              <p className="feature-box__text">
                Intersurgical, a global manufacturer &amp; supplier of wide range of respiratory medical devices which provides flexible patient solutions for airway management, anaesthesia, oxygen &amp; aerosol therapy for use within hospitals and home.
              </p>
              <a href="https://www.intersurgical.com/" className="btn">Visit site</a>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="feature-box">
              <span><img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0009/9455/brand.gif?itok=d4qiDDpS" /></span>
              <h3 className="heading-tertiary u-margin-bottom-small">3M</h3>
              <p className="feature-box__text">
                The 3M Company, an American multinational conglomerate corporation operating in the fields of industry, worker safety, US health care, and consumer goods, making a real impact by igniting progress &amp; inspiring innovation in lives &amp; communities across the globe.
              </p>
              <a href="https://www.3m.com/3M/en_US/health-care-us/" className="btn">Visit site</a>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="feature-box">
              <span><img src="https://media-exp1.licdn.com/dms/image/C560BAQE4BRsQvb_vcw/company-logo_200_200/0/1528803664280?e=2159024400&v=beta&t=Ix17HZg2-y-S0urib2PrOrti487JiHbhAnFUNomn1W0" /></span>
              <h3 className="heading-tertiary u-margin-bottom-small">Suture</h3>
              <p className="feature-box__text">
                Sutrue are a medical research company that utilise 3D printing to enable the design and creation of cutting edge medical technology creating two new suturing devices which are set to transform the suturing process. 
              </p>
              <a href="https://www.sutrue.com/sutrue-new/" className="btn">Visit site</a>
            </div>
          </div>
          {/*new */}
        </div>
      </section>
      {/*added*/}
      <div className="u-center-text u-margin-top-huge">
        <a href="#contact" className="btn btn--blue">Contact us to Inquire</a>
      </div>
    </section>
    {/*done*/}
    <section className="section-courses" id="ourjourney">
      <div className="bg-video">
        <div className="bg-video__content">
          <div style={{width: '100%', height: 0, paddingBottom: '56%', position: 'relative'}}><iframe src="https://giphy.com/embed/5wfyG5uBf1gmNpvh4V" width="100%" height="100%" style={{position: 'absolute'}} frameBorder={0} className="giphy-embed" allowFullScreen /></div><p><a href="https://giphy.com/gifs/sgenerix-5wfyG5uBf1gmNpvh4V" /></p>
        </div>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Our Journey
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">
              </div>
              <div className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  1990-2005
                </span>
              </div>
              <div className="card__details">
                <ul>
                  <li>Started our operations in Nepal and India</li>
                  <li>Launched distribution and logistics network.</li>
                  <li>Sucessfully established operations.</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__duration-box">
                  <p className="card__duration-only">Duration</p>
                  <p className="card__duration-time">15 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  2006-2015
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Launched Market Expansion Services</li>
                  <li>Sucessfully established Surgricals distribution.</li>
                  <li>Established represenattive office in different regions.</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__duration-box">
                  <p className="card__duration-only">Duration</p>
                  <p className="card__duration-time">10 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  2016-2021
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Expanded Services with companies from Europe, USA and UK.</li>
                  <li>Launched operations in different parts of the globe.</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__duration-box">
                  <p className="card__duration-only">Duration</p>
                  <p className="card__duration-time">6 years to till date</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#contact" className="btn btn--blue">Contact for details</a>
      </div>
    </section>
    <section className="section-about" id="about-us">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          ABOUT US
        </h2>
      </div>
      <div className="row">
        <p className="paragraph">
          Sgenerix is a leading growth partner for many pharmaceuticals, diagnostics, and medical devices. We have successfully been leading as one of the top Importers and Distributors of Nepal. Sgenerix, inspired by service motive and motto ”We care for you” , is a representation for making most of the life-saving, prominent, and crucial entity medicines available in the country.
        </p>
        <p className="paragraph">
          We at Sgenerix believe in inclusivity. We believe in the importance of collaboration and cooperation. Whether you are a partner, an employee, or a stakeholder, at Sgenerix, “WE CARE” about all.
        </p>
        <a href="#contact" className="btn-text">Contact us for more details →</a>
      </div>
    </section>
    <section className="section-queries" id="contact">
      <div className="row">
        <div className="query">
          <div className="query__form">
            <form className="form" id="send-mail-form">
              <div className="u-margin-bottom-small">
                <h2 className="heading-secondary">
                  Reach us
                </h2>
              </div>
              <div className="form__group">
                <a href="mailto: marketingsginerix@gmail.com" className="btn btn--white">Send Email</a>
              </div>
            </form>
          </div>
          <p className="map-location">
            <span className="map-location__phone-no fa fa-phone">
              <a href="tel:+977 980-2067468">+977 980-2067468</a>
            </span>
            <a className="map-location__link" href="https://www.google.com/maps/place/OM+Shanti+Chock,+Kathmandu+44600,+Nepal/@27.69091,85.345515,16z/data=!4m5!3m4!1s0x39eb198e309fabe3:0xa343c8fcded81ec7!8m2!3d27.69091!4d85.3455151?hl=en" target="blank">Find us in Google Maps</a>
          </p>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer">
    <div className="footer__logo-box">
      <span><img src="images/sg.png" alt="Sgenerix Logo" className="navigation__small-logo" /></span>
    </div>
    <ul className="footer__navigation-list">
      <li className="footer_"><a data-scroll href="#home" className="navigation__link" title="Home">Home</a></li>
      <li className="footer_"><a data-scroll href="#ourjourney" className="navigation__link">Our Journey</a></li>
      <li className="footer_"><a data-scroll href="#about-us" className="navigation__link" title="About us">About us</a></li>
      <li className="footer_"><a data-scroll href="#associate" className="navigation__link" title="Our Associates">Our Associates</a></li>
      <li className="footer_"><a data-scroll href="#contact" className="navigation__link" title="Contact us">Contact Us</a></li>
    </ul>
    <div className="rights flex-row">
      <h4 className="text-gray">
        Copyright ©2021 All rights reserved | Sgenerix pvt ltd.
        <a href="https://www.youtube.com/channel/UCMbSqyTW0JuPU__GDZEzWSA" target="_black" title="Youtube">Youtube<i className="fa fa-youtube" />
          Channel</a>
      </h4>
    </div>
  </footer>
</div>

            <Form>
  <FormGroup className="mb-3" controlId="formBasic FullName">
      <Form.Label>Full-Name:</Form.Label>
      <Form.Control type="text" placeholder="Enter full-name" style={{ width:'500px'}}/>
   </FormGroup>
   <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Select gender: 
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group className="mb-3" controlId="formBasic Age" style={{ width:'500px'}}>
      <Form.Label>Age:</Form.Label>
      <FormControl type="number" placeholder="Enter Age"/>
      </Form.Group>                
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" style={{ width:'500px'}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <FormGroup className="mb-3" controlId="formBasic Phone" style={{ width:'500px'}}>
      <Form.Label>Phone no:</Form.Label>
      <Form.Control type="phone number" placeholder="Enter Phone-no:" />
   </FormGroup> 
    <Form.Group controlId="formFileMultiple" className="mb-3">
    <Form.Label>Upload medical report</Form.Label>
    <Form.Control type="file" multiple style={{ width:'500px'}} />
    <Form.Text className="text-muted">
      Medical report will be kept confidential.
    </Form.Text>
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea" label="Describe your medical problem.">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px'  , width:'500px'}}
    />
  </FloatingLabel>
  </Form>
  <br></br>
  <Button variant="primary" type="submit">
    Submit
  </Button>
        </div>
    )
}