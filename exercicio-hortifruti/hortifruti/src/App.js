import "./style.css";
import alface from "./imagens/alface.png"
import beterraba from "./imagens/beterraba.png"
import cenoura from "./imagens/cenoura.png"
import laranja from "./imagens/laranja.png"
import limao from "./imagens/limao.png"
import cereja from "./imagens/cereja.png"
import manga from "./imagens/manga.png"
import tomate from "./imagens/tomate.png"
import Carrinho from "./imagens/ShoppingCart.png"
import mais from "./imagens/PlusCircle.png"
import menos from "./imagens/MinusCircle.png"
import React, {Component} from "react";
export default class App extends Component {
    state= {
      frutas: [
        { Imagem: `${alface}`, Titulo: "Alface" },
        { Imagem: `${laranja}`, Titulo: "Laranja" },
        { Imagem: `${cereja}`, Titulo: "Cereja" },
        { Imagem: `${cenoura}`, Titulo: "Cenoura" },
        { Imagem: `${manga}`, Titulo: "Manga" },
        { Imagem: `${limao}`, Titulo: "Limão" },
        { Imagem: `${beterraba}`, Titulo: "Beterraba" },
        { Imagem: `${tomate}`, Titulo: "Tomate" },
      ]
    }
  render () {
    return (
      <div>
        <main>
          <h1 className="tittle">hortifruti</h1>
          <h3 className="VnW">VnW</h3>
          <h2 className="produtos">Nossos Produtos</h2>
          <section className="compras">
            <section className="frutas">
              {this.state.frutas.map((item)=>(
                  
                <img src={item.Imagem} alt= {item.Titulo}></img>
                
              ))}
            </section>
            <div className="caixa">
              <div className="carrinho">
                <img src={`${Carrinho}`} alt='Carrinho'/>
                <p>Arraeste o seu produto aqui para colocar no carrinho</p>
              </div>
              <div className="maisMenos">
                <img src={`${mais}`} alt='Main'/>
                <img src={`${menos}`} alt='Menos'/>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}