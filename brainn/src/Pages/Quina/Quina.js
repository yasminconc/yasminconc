import React, { useEffect, useState } from "react";
import { BoxImgLeft, BoxImgRight, BoxTitle, BoxTitleFooter, ContainerLeft, ContainerMain, ContainerRight, FifthCircle, FirstCircle, FourthCircle, ImgStyled, Loading, NumberCircle, NumberFooter, SecondCircle, SixthCircle, StyledCirculo, ThirdCircle } from "./styled";
import Sidebar2 from "../../Img/Sidebar2.png"
import Path from "../../Img/Path.png"
import Path2 from "../../Img/Path2.png"
import concurso from "../../Img/concurso.png"
import quina from "../../Img/quina.png"
import circulo from "../../Img/circulo.png"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import { goToDiaDeSorte, goToLotofacil, goToLotomania, goToMegaSena, goToQuina, goToTimemania } from "../../Routes/Coordinator";
import axios from "axios";
import { BASE_URL } from "../../Components/BaseUrl";
import moment from "moment";
import CircularProgress from '@mui/material/CircularProgress';


export default function Quina () {

    const navigate = useNavigate()
    const [numberContests , setNumberContests] = useState([])
    const [lotteries, setLotteries] = useState([])
    const [date, setDate] = useState("")


    const getLotteries = async () =>{
        await axios.get(`${BASE_URL}/loterias`)
         .then((res)=> {
           setLotteries(res.data)
         })
         .catch((err)=>{
             alert(err.response.data.message)
         })
       }
 

    const getContests =  async() => {
       await axios.get(`${BASE_URL}/loterias-concursos`)
        .then((res) => {
            setNumberContests(res.data)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }


    const getDate = async () => {

        if(numberContests.length > 0 ){

        const lotery = lotteries.filter((lottery) => {
            return(
                lottery.nome === "quina"
            )
        })

        const contest = numberContests.filter((numberContest)=>{
            return(
                numberContest.loteriaId === lotery[0].id
            )
        })
        
      
        await axios.get(`${BASE_URL}/concursos/${contest[0].concursoId}`)
        .then((res) => {
            setDate(res.data)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

        }
    }


    const  mapContests  = numberContests.map((contest) => {
        return(
            contest.concursoId
        )
    })
 
    
    useEffect(() => {
        getContests()
        getLotteries() 
    },[])


    useEffect(() => {
        getDate()  
      },[numberContests])

  
      const pushArray = lotteries.map((lottery)=> {
          return(
             <MenuItem value={lottery.id}>{lottery.nome}</MenuItem>
          )
      })


    return(
        
        <ContainerMain>

          <ImgStyled src={Sidebar2}/>

          <ContainerLeft>
            <Select sx={{width:"215.91px", height:"45.2px", backgroundColor: "white", borderRadius: "10px"}}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem value="" onClick={() => goToMegaSena(navigate)}>
                    <em>MEGA-SENA</em>
                </MenuItem>
                <MenuItem value={10} onClick={() => goToQuina(navigate)}>QUINA</MenuItem>
                <MenuItem value={20} onClick={() => goToLotofacil(navigate)}>LOTOFÁCIL</MenuItem>
                <MenuItem value={30} onClick={() => goToLotomania(navigate)}>LOTOMANIA</MenuItem>
                <MenuItem value={40} onClick={() => goToTimemania(navigate)}>TIMEMANIA</MenuItem>
                <MenuItem value={50} onClick={() => goToDiaDeSorte(navigate)}>DIA DE SORTE</MenuItem>
                </Select>

              <BoxTitle>
                  <img src={quina}/>
              </BoxTitle>

              <BoxImgRight>
                  <img src={Path2}/>
              </BoxImgRight>

              <BoxImgLeft>
                  <img src={Path}/>
              </BoxImgLeft>

              <BoxTitleFooter>
                  <img src={concurso}/>
                  <NumberFooter>{mapContests[1]} - {moment(date.data).format("DD/MM/YYYY")}</NumberFooter>
              </BoxTitleFooter>

          </ContainerLeft> 

           {date.numeros?
          
           <>
          

          <FirstCircle>
              <StyledCirculo src={circulo}/>   
              <NumberCircle>{date?.numeros[0]}</NumberCircle>
          </FirstCircle>

          <SecondCircle>
              <StyledCirculo src={circulo}/>
              <NumberCircle>{date?.numeros[1]}</NumberCircle>
          </SecondCircle>

          <ThirdCircle>
              <StyledCirculo src={circulo}/>
              <NumberCircle>{date?.numeros[2]}</NumberCircle>
          </ThirdCircle>

          <FourthCircle>
              <StyledCirculo src={circulo}/>
              <NumberCircle>{date?.numeros[3]}</NumberCircle>
          </FourthCircle>

          <FifthCircle>
              <StyledCirculo src={circulo}/>
              <NumberCircle>{date?.numeros[4]}</NumberCircle>
          </FifthCircle>
        
        </> 

          :

          <Loading>
          <CircularProgress />
          </Loading>

        }
           
        </ContainerMain>
    )
}
