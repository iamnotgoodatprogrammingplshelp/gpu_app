#ifndef GUIMONITOR_H
#define GUIMONITOR_H

#include <QWidget>
#include <QTimer>
#include <QTextEdit>
#include <QProgressBar>

class GuiMonitor : public QWidget {
    Q_OBJECT
public:
    explicit GuiMonitor(QWidget *parent = nullptr);

public slots:
    void react();

private slots:
    void updateVitals();

private:
    QTextEdit *thoughtLog;
    QProgressBar *energyLevel;
    QTimer *heartbeat;
    int cycle;
    int energy;
};

#endif
