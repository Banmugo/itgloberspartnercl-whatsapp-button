import React from 'react';
import PropTypes from 'prop-types'

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}

const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    console.log("Mi mensaje formateado es", formattedMessage, logo)
return <>
    <div className="fixed bottom-2 right-2 flex flexColumn">
        <a 
            href={`https://wa.me/${phone}?text=${formattedMessage}`}
            target="_blank"
            rel="noreferrer noopener"
            >
              <img 
              src={logo} 
              alt="Logo de WhatsApp" 
              width={width} 
              height={height} 
              />
        </a>
    </div>
</>
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3168539090",
    message: "Estas comunicándote a la linea de clone-dafiti, cuentanos en que te podemos ayudar?.",
    width: 80,
    height: 80
}

WhatsappButton.shema = {
    title: "Botón de WhatsApp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de WhatsApp que se relacione con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            },
            phone: {
                title: "Teléfono",
                description: "agrega por favor el número de teléfono",
                type: "string"
            },
            message: {
                title: "Mensaje",
                description: "agrega por favor el mensaje que se verá para tu cliente",
                type: "string",
                widget:{
                    "ui:widget": "textarea"
                }
            },
            width: {
              title: "width",
              description: "ancho del logo",
              type: "number"
          },
          height: {
            title: "Heigth",
            description: "alto del logo",
            type: "number"
        }
        }
    }
}

export default WhatsappButton;