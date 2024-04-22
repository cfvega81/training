using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Wpf.AC.ViewModel;

namespace Wpf.AC
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window

    {
        public MainWindow()
        {
            MainWindowViewModel vm = new MainWindowViewModel();
            DataContext = vm;
        }




        private void PowerButton_Click(object sender, RoutedEventArgs e)
        {
            // Obtener el ViewModel desde el DataContext de la MainWindow
            if (DataContext is MainWindowViewModel viewModel)
            {
                // Cambiar el estado de encendido/apagado
                viewModel.Offon = !viewModel.Offon;
            }
        }

        private void IncrementButton_Click(object sender, RoutedEventArgs e)
        {
            // Obtener el ViewModel desde el DataContext de la MainWindow
            if (DataContext is MainWindowViewModel viewModel)
            {
                // Incrementar la temperatura
                viewModel.Temperature++;
            }
        }

        private void DecrementButton_Click(object sender, RoutedEventArgs e)
        {
            // Obtener el ViewModel desde el DataContext de la MainWindow
            if (DataContext is MainWindowViewModel viewModel)
            {
                // Decrementa la temperatura
                viewModel.Temperature--;
            }
        }

        private void ModeButton_Click(object sender, RoutedEventArgs e)
        {
            // Obtener el ViewModel desde el DataContext de la MainWindow
            if (DataContext is MainWindowViewModel viewModel)
            {

                viewModel.ToggleBlades();
            }
        }
    }
}