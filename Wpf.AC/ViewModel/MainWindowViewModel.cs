using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Windows.Input;
using Wpf.AC.MVVM;

namespace Wpf.AC.ViewModel
{
    class MainWindowViewModel : INotifyPropertyChanged
    {
        private double temperature;
        private BladeStatus mode;
        private bool offon;
        private string roomName;

        public string RoomName
        {
            get { return roomName; }
            set
            {
                if (value != roomName)
                {
                    roomName = value;
                    OnPropertyChanged(nameof(RoomName));
                }
            }
        }

        public double Temperature
        {
            get { return temperature; }
            set
            {
                if (value != temperature)
                {
                    temperature = value;
                    OnPropertyChanged(nameof(Temperature));
                }
            }
        }
        public bool Offon
        {
            get { return offon; }
            set
            {
                if (value != offon)
                {
                    offon = value;
                    OnPropertyChanged(nameof(Offon));
                }
            }
        }

        public BladeStatus Mode
        {
            get { return mode; }
            set
            {
                if (value != mode)
                {
                    mode = value;
                    OnPropertyChanged(nameof(Mode));
                }
            }
        }

        public ICommand ToggleModeCommand { get; }
        public RoomModel Room { get; }

        public string PowerStatus
        {
            get { return Offon ? "Encendido" : "Apagado"; }
        }


        public event PropertyChangedEventHandler PropertyChanged;

        public MainWindowViewModel()
        {
            // Inicializa el modo en un estado por defecto
            Mode = BladeStatus.DOWN;

            // Asigna el método ToggleBlades al comando ToggleModeCommand
            ToggleModeCommand = new RelayCommand(ToggleBlades);

            Room = new RoomModel();

        }

        public void IncrementTemperature()
        {
            Room.IncrementTemperature();
        }

        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));

            // Notificar cambios en PowerStatus si la propiedad modificada es Offon
            if (propertyName == nameof(Offon))
            {
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(PowerStatus)));
            }
        }

        public void ToggleBlades()
        {
            // Cambia el modo de las cuchillas según el estado actual
            Mode = Mode switch
            {
                BladeStatus.DOWN => BladeStatus.MIDDLE,
                BladeStatus.MIDDLE => BladeStatus.UP,
                BladeStatus.UP => BladeStatus.SPIN,
                _ => BladeStatus.DOWN
            };
            Console.WriteLine(Mode);
        }

        public enum BladeStatus
        {
            DOWN,
            MIDDLE,
            UP,
            SPIN
        }

    }
    }
