using Dimex002DAL.Contrato;
using PruebaDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dimex002DAL.Repositorio
{
    public class ClienteRepositorio : RepositorioGenerico<imss_preautorizacion>, IRepositorio<imss_preautorizacion>
    {

        private readonly dimex002Entity context;
        public ClienteRepositorio()
        {
            context = new dimex002Entity();
            InitRepositorioGenerico(context);
        }


    }


}
